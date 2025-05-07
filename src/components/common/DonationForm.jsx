import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function DonationForm() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('swish');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation submitted:', { amount, paymentMethod });
    alert(currentLang === 'en' 
      ? 'Thank you for your donation!' 
      : 'Tack för din gåva!');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">
        {currentLang === 'en' ? 'Support Our Ministry' : 'Stöd Vår Verksamhet'}
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            {currentLang === 'en' ? 'Donation Amount' : 'Donationsbelopp'}
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
              {currentLang === 'en' ? 'SEK' : 'SEK'}
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 border p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="0.00"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            {currentLang === 'en' ? 'Payment Method' : 'Betalningsmetod'}
          </label>
          
          <div className="grid grid-cols-3 gap-3">
            <div>
              <input
                type="radio"
                id="swish"
                name="paymentMethod"
                value="swish"
                checked={paymentMethod === 'swish'}
                onChange={() => setPaymentMethod('swish')}
                className="sr-only"
              />
              <label
                htmlFor="swish"
                className={`cursor-pointer border rounded-md p-3 flex flex-col items-center \${
                  paymentMethod === 'swish' ? 'bg-primary text-white border-primary' : 'border-gray-300'
                }`}
              >
                <span className="text-sm font-medium">Swish</span>
              </label>
            </div>
            
            <div>
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
                className="sr-only"
              />
              <label
                htmlFor="paypal"
                className={`cursor-pointer border rounded-md p-3 flex flex-col items-center \${
                  paymentMethod === 'paypal' ? 'bg-primary text-white border-primary' : 'border-gray-300'
                }`}
              >
                <span className="text-sm font-medium">PayPal</span>
              </label>
            </div>
            
            <div>
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="sr-only"
              />
              <label
                htmlFor="card"
                className={`cursor-pointer border rounded-md p-3 flex flex-col items-center \${
                  paymentMethod === 'card' ? 'bg-primary text-white border-primary' : 'border-gray-300'
                }`}
              >
                <span className="text-sm font-medium">
                  {currentLang === 'en' ? 'Card' : 'Kort'}
                </span>
              </label>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-opacity-90"
        >
          {currentLang === 'en' ? 'Donate Now' : 'Donera Nu'}
        </button>
      </form>
      
      <p className="text-sm text-gray-600 mt-4 text-center">
        {currentLang === 'en' 
          ? 'Your donation supports our mission and community outreach.'
          : 'Din donation stödjer vårt uppdrag och vårt arbete i samhället.'}
      </p>
    </div>
  );
}

export default DonationForm;