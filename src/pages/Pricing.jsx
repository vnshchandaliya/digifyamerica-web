import React, { useState, useEffect } from 'react';
import ProgressBar from '../components/ProgressBar';
import StepCard from '../components/StepCard';
import NavigationButtons from '../components/NavigationButtons';
import SubmissionPopup from '../components/SubmissionPopup';
import BasicWebsite from '../assets/pricing-Icon/Basic Website.png'
import eCommerce from '../assets/pricing-Icon/ecommerce.png'
import Blog from '../assets/pricing-Icon/Blog.png'
import Portfolio from '../assets/pricing-Icon/Portfolio.png'
import Event from '../assets/pricing-Icon/Event.png'
import CalendarBooking from '../assets/pricing-Icon/Calendar Booking.png'
import GoogleAnalytics from '../assets/pricing-Icon/Google Analytics.png'
import MailingList from '../assets/pricing-Icon/Mailing List.png'
import FacebookTracking from '../assets/pricing-Icon/Facebook Tracking.png'
import LogoDesign from '../assets/pricing-Icon/Logo Design.png'
import BusinessCard from '../assets/pricing-Icon/Business Card.png'
import BusinessOptimization from '../assets/pricing-Icon/Business Optimization.png'
import "../index.css"; 

const stepHeadings = [
    'Website Package',
    '# of Website Pages', 
    'Features', 
    'Integrations', 
    'Additional Work', 
    'Delivery Timeline', 
    'Final cost', 
];

const stepSubheadings = [
    'Select Basic or eCommerce options.',
    'How many non-product, non-blog pages do you estimate you will need.', 
    'Select the features you would like to include.', 
    'Select the integrations you would like to include.', 
    'Any final tweaks or enhancements?', 
    'Option for fast delivery.', 
    'Confirm your project and contact details.', 
];

const stepsData = {
    1: [ // UI Step 1
        { img: BasicWebsite, title: 'Basic Website', price: 699, desc: 'Includes Home, About, Services, Contact, and Blog.' },
        { img: eCommerce, title: 'eCommerce Website', price: 1400, desc: 'The basic fee for an eCommerce WordPress website starts at $2,500...' },
    ],
    4: [ // UI Step 3
        { img: Blog , title: 'Blog', price: 200 },
        { img: CalendarBooking, title: 'Calendar Booking', price: 300 },
        { img: Portfolio, title: 'Portfolio', price: 200 },
        { img: Event, title: 'Event', price: 200 }, 
    ],
    5: [ // UI Step 4
        { img: GoogleAnalytics, title: 'Google Analytics', price: 100 },
        { img: MailingList, title: 'Mailing List Integration', price: 100 },
        { img: FacebookTracking , title: 'Facebook Tracking', price: 100 },
    ],
    6: [ // UI Step 5
        { img: LogoDesign, title: 'Logo Design', price: 500 },
        { img: BusinessCard, title: 'Business Card Design', price: 200 }, 
        { img: BusinessOptimization, title: 'Google My Business Optimization', price: 200 },
    ],
};

const totalSteps = 7; 
const multiSelectSteps = [4, 5, 6]; 
const skipErrorSteps = [3, 4, 5, 6]; 

function Pricing() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [pageCount, setPageCount] = useState(0);
    const [fastDelivery, setFastDelivery] = useState(false);
    const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });
    const [errorMsg, setErrorMsg] = useState('');

    // --- Price Calculation Logic ---
    useEffect(() => {
        let newTotal = 0;
        
        Object.keys(selectedOptions).forEach(step => {
            const stepInt = parseInt(step);
            const selection = selectedOptions[step];

            if (stepInt === 1 || stepInt === 7) { 
                newTotal += selection || 0;
            }
            
            if (multiSelectSteps.includes(stepInt)) {
                const itemsData = stepsData[stepInt];
                if (Array.isArray(selection) && itemsData) {
                    selection.forEach(title => {
                        const item = itemsData.find(i => i.title === title);
                        if (item) newTotal += item.price;
                    });
                }
            }
        });

        newTotal += pageCount * 100;

        setTotalPrice(newTotal);
    }, [selectedOptions, pageCount]);

    // --- Handlers ---
    
    const handleCardClick = (stepDataKey, card) => {
        if (multiSelectSteps.includes(stepDataKey)) {
            setSelectedOptions(prev => {
                const currentSelection = prev[stepDataKey] || [];
                if (currentSelection.includes(card.title)) {
                    return { ...prev, [stepDataKey]: currentSelection.filter(title => title !== card.title) };
                } else {
                    return { ...prev, [stepDataKey]: [...currentSelection, card.title] };
                }
            });
        } else {
            setSelectedOptions(prev => ({ ...prev, [stepDataKey]: card.price }));
        }
        setErrorMsg('');
    };

    const handlePageRangeChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setPageCount(value);
        setSelectedOptions(prev => ({ ...prev, 2: value * 100 }));
        setErrorMsg('');
    };

    const handleToggleChange = (e) => {
        const isChecked = e.target.checked;
        setFastDelivery(isChecked);
        setSelectedOptions(prev => ({ ...prev, 7: isChecked ? 500 : 0 }));
    };
    
    // ... (sendDataToGoogleSheet and handlePopupClose functions remain the same) ...
    const sendDataToGoogleSheet = async (data) => {
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbyL-H6UCMSAfONeRWweYYJhvDvbB6hCmF0-b0v0tWRHt86QvLh-ObTIbtRVSRN5y8S4Ww/exec';
        try {
            await fetch(scriptUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
            return { success: true, message: 'Form submitted successfully!' };
        } catch (error) {
            console.error('Error sending data to Google Sheet:', error);
            return { success: false, message: 'There was an error submitting the form. Please try again.' };
        }
    };
    const handlePopupClose = () => setIsPopupOpen(false);


    const handleNext = async () => {
        let isValid = false;
        let currentSelectionKey = currentStep;
        if (currentStep >= 3 && currentStep <= 5) {
            currentSelectionKey = currentStep + 1;
        }
        const currentSelection = selectedOptions[currentSelectionKey];

        if (skipErrorSteps.includes(currentStep)) isValid = true;
        else if (currentStep === 2) isValid = pageCount > 0;
        else if (currentStep === totalSteps) isValid = contactInfo.email.trim() !== '' && contactInfo.phone.trim() !== '';
        else isValid = currentSelection !== undefined && (Array.isArray(currentSelection) ? currentSelection.length > 0 : true);

        if (!isValid) {
            setErrorMsg(currentStep === totalSteps ? 'Please enter your contact information to submit.' : 'You need to select an item to continue.');
            return;
        }

        setErrorMsg('');
        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
        } else {
            // Submission Logic
            const formatMultiSelect = (key) => (selectedOptions[key] || []).map(title => `${title}: $${(stepsData[key].find(i => i.title === title) || {}).price}`).join(', ');
            const getSingleSelect = (key) => {
                const price = selectedOptions[key];
                if (!price) return 'N/A';
                const item = stepsData[key]?.find(i => i.price === price);
                return item ? `${item.title}: $${price}` : 'N/A';
            };
            const finalData = {
                websitePackage: getSingleSelect(1),
                pageCount: `Pages: ${pageCount} ($${pageCount * 100})`,
                features: formatMultiSelect(4),
                integrations: formatMultiSelect(5),
                additionalWork: formatMultiSelect(6),
                delivery: `Delivery: ${fastDelivery ? 'Fast ($500)' : 'Standard ($0)'}`,
                totalPrice: `Total Price: $${totalPrice.toLocaleString()}`,
                email: contactInfo.email,
                phone: contactInfo.phone,
            };

            const result = await sendDataToGoogleSheet(finalData);
            if (result.success) setIsPopupOpen(true);
            else alert(result.message);
        }
    };

    // --- Prev Button Logic (CORRECTED FOR ALL STEPS) ---
    const handlePrev = () => {
        if (currentStep > 1) {
            const stepToLeave = currentStep;
            
            // 1. Determine the data key for the step we are leaving.
            let keyToClear;
            if (stepToLeave === 2) {
                keyToClear = 2; // Page Count
            } else if (stepToLeave >= 3 && stepToLeave <= 5) {
                keyToClear = stepToLeave + 1; // Features, Integrations, Additional Work
            } else if (stepToLeave === 6) {
                keyToClear = 7; // Delivery Timeline
            }

            // 2. If it's a step with data, clear it.
            if (keyToClear) {
                // If leaving Step 2 (Page Count), reset its state.
                if (stepToLeave === 2) {
                    setPageCount(0);
                }
                // If leaving Step 6 (Delivery), reset its state.
                if (stepToLeave === 6) {
                    setFastDelivery(false);
                }
                
                // Remove the selection data from the state object.
                setSelectedOptions(prev => {
                    const newOptions = { ...prev };
                    delete newOptions[keyToClear];
                    return newOptions;
                });
            }

            // 3. Navigate to the previous step.
            setCurrentStep(prev => prev - 1);
            setErrorMsg('');
        }
    };
    
    // --- Render Content ---
    const renderStepContent = () => {
        // ... (renderStepContent function remains the same as your previous code) ...
        switch (currentStep) {
            case 1: 
            case 3: 
            case 4: 
            case 5: 
                const stepDataKey = currentStep === 1 ? 1 : currentStep + 1; 
                const currentStepData = stepsData[stepDataKey];
                if (!currentStepData) return <p className="text-red-500 text-center">Error: Missing data.</p>;
                const gridClasses = { 1: "flex flex-wrap justify-center gap-5 mt-5", 3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5", 4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5", 5: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5" };
                return (
                    <div className={gridClasses[currentStep]}>
                        {currentStepData.map((card) => (
                            <StepCard key={card.title} {...card} onClick={() => handleCardClick(stepDataKey, card)} isActive={multiSelectSteps.includes(stepDataKey) ? (selectedOptions[stepDataKey] || []).includes(card.title) : selectedOptions[stepDataKey] === card.price} />
                        ))}
                    </div>
                );
            case 2: // Page Count
                return (
                    <div className="form-group w-full max-w-xl mx-auto text-center">
                        <label htmlFor="pageRange" className="text-xl font-semibold text-black ">Select number of pages (Max 30):</label>
                        <input type="range" id="pageRange" min="0" max="30" value={pageCount} onChange={handlePageRangeChange} className="mt-5 w-full " />
                        <div className="range-info text-lg mt-2 Poppins-font text-[#234C6A]">{pageCount} Page{pageCount > 1 || pageCount === 0 ? 's' : ''} (${pageCount * 100})</div>
                    </div>
                );
            case 6: // Delivery Timeline
                return (
                    <div className="toggle-container flex justify-center mt-10">
                        <label className="toggle-label flex flex-col items-center text-lg font-semibold text-[#1B3C53]">
                            <span>Express Delivery ($500)</span>
                            <input type="checkbox" className="sr-only peer" checked={fastDelivery} onChange={handleToggleChange} />
                            <span className="toggle-slider w-16 h-8 bg-gray-300 rounded-full relative transition-all duration-300 before:content-[''] before:absolute before:top-1 before:left-1 before:w-6 before:h-6 before:bg-white before:rounded-full before:transition-transform before:duration-300 before:ease-in-out peer-checked:bg-[#1B3C53] peer-checked:before:transform peer-checked:before:translate-x-8" />
                        </label>
                    </div>
                );
            case 7: // Final cost
                return (
                    <div className="form-group max-w-md mx-auto flex flex-col gap-5">
                        <div className="card-title text-2xl font-bold text-center">The final estimated price is :</div>
                        <p id="finalPrice" className="text-5xl font-bold text-center text-black">${totalPrice.toLocaleString()}</p>
                        <input type="email" placeholder="Email Address" value={contactInfo.email} onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })} className="p-3 text-base border border-gray-900 rounded-lg" required />
                        <input type="tel" placeholder="Phone Number" value={contactInfo.phone} onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })} className="p-3 text-base border border-gray-900 rounded-lg" required />
                    </div>
                );
            default: return null;
        }
    };

    return (
        <section className='bg-[#D2C1B6] min-h-screen text-[#234C6A]'> 
            <div className="container text-[#234C6A] max-w-screen-lg mx-auto p-5 pt-20 ">
                <ProgressBar currentStep={currentStep} totalSteps={totalSteps} totalPrice={totalPrice} />
                <div id="headings" className="text-center">
                    <h2 className="text-[34px] Poppins-font text-[#1B3C53] mb-2">{stepHeadings[currentStep - 1]}</h2>
                    <p className="subheading text-lg text-[#456882] mb-10">{stepSubheadings[currentStep - 1]}</p>
                </div>
                {renderStepContent()}
                <div className="mt-10 text-center">
                    {errorMsg && <p className="text-red-500">{errorMsg}</p>}
                </div>
                <NavigationButtons onNext={handleNext} onPrev={handlePrev} showPrev={currentStep > 1} />
                <SubmissionPopup isOpen={isPopupOpen} onClose={handlePopupClose} />
            </div>
        </section>
    );
}

export default Pricing;