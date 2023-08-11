document.addEventListener('DOMContentLoaded', () => {
    const stripe = Stripe('pk_test_51NdHSRSIcSCFLcxuY8fsDK6YxyIRIo4MAaReiAhxpk3jQNotuxtbt7LQArqYJ7fD7lQ71qVvhNIRlVk81rWEPOBl00ODnwfnXc'); // Replace with your actual Stripe publishable key
    const elements = stripe.elements();
  
    const cardElement = elements.create('card', {
      style: {
        base: {
          iconColor: '#666EE8',
          color: '#31325F',
          lineHeight: '40px',
          fontWeight: 300,
          fontFamily: 'Helvetica Neue, sans-serif',
          fontSize: '18px',
          '::placeholder': {
            color: '#CFD7E0',
          },
        },
      },
    });
    
    cardElement.mount('#card-number');
  
    const form = document.getElementById('payment-form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const { token, error } = await stripe.createToken(cardElement);
  
      if (error) {
        console.error(error);
      } else {
        const selectedPlan = 'Your Plan Name'; // Replace with your plan name
        const billingCycle = document.getElementById('billing-cycle').value;
        const planPrice = billingCycle === 'monthly' ? 1000 : 10000; // Replace with actual plan prices
  
        // Make a POST request to your server to create a subscription
        const response = await fetch('/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan: selectedPlan,
            interval: billingCycle,
            stripeToken: token.id,
          }),
        });
  
        const responseData = await response.json();
  
        if (responseData.success) {
          // Update order summary with subscription details
          document.getElementById('selected-plan').innerText = selectedPlan;
          document.getElementById('billing-cycle-summary').innerText = billingCycle;
          document.getElementById('plan-price-summary').innerText = `$${planPrice / 100}`;
        } else {
          console.error(responseData.error);
        }
      }
    });
  });
  
