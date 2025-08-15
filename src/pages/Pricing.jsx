// src/App.jsx
import React, { useState, useEffect } from 'react';
import ProgressBar from '../components/ProgressBar';
import StepCard from '../components/StepCard';
import NavigationButtons from '../components/NavigationButtons';
import SubmissionPopup from '../components/SubmissionPopup';

const stepHeadings = [
  'Website Package',
  'Design Options',
  '# of Website Pages',
  'Features',
  'Integrations',
  'Additional Work',
  'Delivery Timeline',
  'Final cost',
];

const stepSubheadings = [
  'Select Basic or eCommerce options.',
  'Select the type of web design service needed.',
  'How many non-product, non-blog pages do you estimate you will need.',
  'Select the features you would like to include.',
  'Select the integrations you would like to include.',
  'Any final tweaks or enhancements?',
  'Option for fast delivery.',
  'Confirm your project and contact details.',
];

const stepsData = {
  1: [
    { img: 'https://img.icons8.com/ios-filled/100/000000/news.png', title: 'Basic Website', price: 300, desc: 'Includes Home, About, Services, Contact, and Blog.' },
    { img: 'https://img.icons8.com/ios-filled/100/000000/shopping-cart.png', title: 'eCommerce Website', price: 1400, desc: 'The basic fee for an eCommerce WordPress website starts at $2,500. Includes online product sales, payment, & shipping systems. Additional pages include home, about, services, contact, and a blog.' },
  ],
  2: [
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/new-website-icon-color.png', title: 'New Website Design', price: 800, desc: 'A new branded design for your websites look and feel. Includes mockups for the home page and 2 interior pages.' },
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/redesign-icon.png', title: 'Website Re-Design', price: 400, desc: 'A revamp of your current websites look and feel. Ideal for modernizing older sites. Includes mockups for the home page and 2 interior pages.' },
  ],
  4: [
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/blog-icon.png', title: 'Blog', price: 200 },
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/portfolio-icon.png', title: 'Portfolio', price: 300 },
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/events-calendar-icon.png', title: 'Event', price: 501 },
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/booking-icon.png', title: 'Calendar Booking', price: 502 },
  ],
  5: [
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/analytics-icon.png', title: 'Google Analytics', price: 75 },
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/email-list-icon.png', title: 'Mailing List Integration', price: 200 },
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/facebook-icon.png', title: 'Facebook Tracking', price: 100 },
  ],
  6: [
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/Logo-Designb.png', title: 'Logo Design', price: 500 },
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/business-cards-icon.png', title: 'Business Card Design', price: 202 },
    { img: 'https://singlerdesign.com/wp-content/uploads/2021/10/google-my-business-icon.png', title: 'Google My Business Optimization', price: 201 },
  ],
};

const totalSteps = 8;
const multiSelectSteps = [4, 5, 6];
const skipErrorSteps = [4, 5, 6, 7];

function Pricing() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const [fastDelivery, setFastDelivery] = useState(false);
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let newTotal = 0;
    Object.keys(selectedOptions).forEach(step => {
      const selection = selectedOptions[step];
      if (Array.isArray(selection)) {
        selection.forEach(price => (newTotal += price));
      } else {
        newTotal += selection || 0;
      }
    });

    newTotal += pageCount * 100;

    if (fastDelivery) {
      newTotal += 550;
    }

    setTotalPrice(newTotal);
  }, [selectedOptions, pageCount, fastDelivery]);

  const handleCardClick = (step, price) => {
    if (multiSelectSteps.includes(step)) {
      setSelectedOptions(prev => {
        const currentSelection = prev[step] || [];
        if (currentSelection.includes(price)) {
          return { ...prev, [step]: currentSelection.filter(p => p !== price) };
        } else {
          return { ...prev, [step]: [...currentSelection, price] };
        }
      });
    } else {
      setSelectedOptions(prev => ({ ...prev, [step]: price }));
    }
    setErrorMsg('');
  };

  const handlePageRangeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPageCount(value);
    setSelectedOptions(prev => ({ ...prev, 3: value * 100 }));
    setErrorMsg('');
  };

  const handleToggleChange = (e) => {
    setFastDelivery(e.target.checked);
    setSelectedOptions(prev => ({ ...prev, 7: e.target.checked ? 550 : 0 }));
  };

  // This function is now async and returns a promise
  const sendDataToGoogleSheet = async (data) => {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyL-H6UCMSAfONeRWweYYJhvDvbB6hCmF0-b0v0tWRHt86QvLh-ObTIbtRVSRN5y8S4Ww/exec';
    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log('Data sent to Google Sheet:', data);
      return { success: true, message: 'Form submitted successfully!' };
    } catch (error) {
      console.error('Error sending data to Google Sheet:', error);
      return { success: false, message: 'There was an error submitting the form. Please try again.' };
    }
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    // window.location.reload();
  };

  const handleNext = async () => {
    let isValid = false;
    const currentSelection = selectedOptions[currentStep];

    if (skipErrorSteps.includes(currentStep)) {
        isValid = true;
    } else if (currentStep === 3) {
        isValid = pageCount > 0;
    } else if (currentStep === 8) {
        isValid = contactInfo.email.trim() !== '' && contactInfo.phone.trim() !== '';
    } else {
        isValid = currentSelection !== undefined && (Array.isArray(currentSelection) ? currentSelection.length > 0 : true);
    }

    if (!isValid) {
        setErrorMsg('You need to select an item to continue.');
        return;
    }

    setErrorMsg('');
   if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
    } else {
        // Formatted strings banane ke liye helper function
        const formatMultiSelect = (step) => {
            const selectedItems = (selectedOptions[step] || []).map(price => {
                const item = stepsData[step].find(i => i.price === price);
                return item ? `${item.title}: $${item.price}` : '';
            });
            return selectedItems.join(', ');
        };

        const getSingleSelect = (step) => {
            const price = selectedOptions[step];
            if (price) {
                const item = stepsData[step].find(i => i.price === price);
                return item ? `${item.title}: $${item.price}` : '';
            }
            return 'N/A';
        };

        const finalData = {
            websitePackage: getSingleSelect(1),
            designOption: getSingleSelect(2),
            pageCount: `Pages: ${pageCount} ($${pageCount * 100})`,
            features: formatMultiSelect(4),
            integrations: formatMultiSelect(5),
            additionalWork: formatMultiSelect(6),
            delivery: `Delivery: ${fastDelivery ? 'Fast ($550)' : 'Standard'}`,
            totalPrice: `Total Price: $${totalPrice.toLocaleString()}`,
            email: contactInfo.email,
            phone: contactInfo.phone,
        };

        console.log('Final data:', finalData);
        const result = await sendDataToGoogleSheet(finalData);

        if (result.success) {
            setIsPopupOpen(true);
        } else {
            alert(result.message);
        }
    }
};
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setErrorMsg('');
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
      case 2:
      case 4:
      case 5:
      case 6:
        const gridClasses = {
          1: "flex flex-wrap justify-center gap-5 mt-5",
          2: "flex flex-wrap justify-center gap-5 mt-5",
          4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5",
          5: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5",
          6: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5",
        };
        return (
          <div className={gridClasses[currentStep]}>
            {stepsData[currentStep].map((card) => (
              <StepCard
                key={card.title}
                {...card}
                onClick={() => handleCardClick(currentStep, card.price)}
                isActive={
                  multiSelectSteps.includes(currentStep)
                    ? (selectedOptions[currentStep] || []).includes(card.price)
                    : selectedOptions[currentStep] === card.price
                }
              />
            ))}
          </div>
        );
      case 3:
        return (
          <div className="form-group w-full max-w-xl mx-auto text-center">
            <label htmlFor="pageRange" className="text-xl font-semibold text-indigo-900 ">
              Select number of pages (Max 30):
            </label>
            <input
              type="range"
              id="pageRange"
              min="0"
              max="30"
              value={pageCount}
              onChange={handlePageRangeChange}
              className="mt-5 w-full "
            />
            <div className="range-info text-lg mt-2">{pageCount} Page{pageCount > 1 || pageCount === 0 ? 's' : ''} (${pageCount * 100})</div>
          </div>
        );
      case 7:
        return (
          <div className="toggle-container flex justify-center mt-10">
            <label className="toggle-label flex flex-col items-center text-lg font-semibold text-indigo-900">
              <span>Delivery less than 30 days</span>
              <input type="checkbox" className="sr-only peer" checked={fastDelivery} onChange={handleToggleChange} />
              <span className="toggle-slider w-16 h-8 bg-gray-300 rounded-full relative transition-all duration-300 before:content-[''] before:absolute before:top-1 before:left-1 before:w-6 before:h-6 before:bg-white before:rounded-full before:transition-transform before:duration-300 before:ease-in-out peer-checked:bg-indigo-900 peer-checked:before:transform peer-checked:before:translate-x-8" />
            </label>
          </div>
        );
      case 8:
        return (
          <div className="form-group max-w-md mx-auto flex flex-col gap-5">
            <div className="card-title text-2xl font-bold text-center">The final estimated price is :</div>
            <p id="finalPrice" className="text-5xl font-bold text-center text-black">${totalPrice.toLocaleString()}</p>
            <input
              type="email"
              placeholder="Email Address"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              className="p-3 text-base border border-gray-300 rounded-lg"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
              className="p-3 text-base border border-gray-300 rounded-lg"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container max-w-screen-lg mx-auto p-5 pt-45">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} totalPrice={totalPrice} />
      <div id="headings" className="text-center">
        <h2 className="text-[34px] font-[300] text-[#000] mb-2">{stepHeadings[currentStep - 1]}</h2>
        <p className="subheading text-lg text-gray-500 mb-10">{stepSubheadings[currentStep - 1]}</p>
      </div>
      {renderStepContent()}
      <div className="mt-10 text-center">
        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      </div>
      <NavigationButtons onNext={handleNext} onPrev={handlePrev} showPrev={currentStep > 1} />
      <SubmissionPopup 
        isOpen={isPopupOpen} 
        onClose={handlePopupClose}
      />
    </div>
  );
}

export default Pricing;