document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('payment-form');
    const selectedPlanElement = document.getElementById('selected-plan');
    const billingCycleSummaryElement = document.getElementById('billing-cycle-summary');
    const planPriceSummaryElement = document.getElementById('plan-price-summary');

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Assuming the form submission handles the payment process
        // You can add your payment processing logic here

        const billingCycleSelect = document.getElementById('billing-cycle');
        const selectedBillingCycle = billingCycleSelect.options[billingCycleSelect.selectedIndex].text;

        const selectedPlan = "Premium"; // Change this based on your logic
        const planPrice = getPlanPrice(selectedPlan, selectedBillingCycle); // Replace with your pricing logic

        // Update order summary
        selectedPlanElement.textContent = selectedPlan;
        billingCycleSummaryElement.textContent = selectedBillingCycle;
        planPriceSummaryElement.textContent = planPrice;

        // You can also store these values in sessionStorage for future reference
        sessionStorage.setItem('selectedPlan', selectedPlan);
        sessionStorage.setItem('selectedBillingCycle', selectedBillingCycle);
        sessionStorage.setItem('planPrice', planPrice);
    });

    // Function to get plan price
    function getPlanPrice(plan, billingCycle) {
        // Replace this with your actual pricing logic
        // You can fetch pricing from a backend or calculate it locally
        if (plan === "Premium" && billingCycle === "Monthly") {
            return "500 INR";
        } else if (plan === "Premium" && billingCycle === "Yearly") {
            return "5000 INR";
        }
        // Add more cases for other plans and billing cycles
        return "N/A";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const changePlanBtn = document.getElementById('changePlanBtn');

    changePlanBtn.addEventListener('click', function () {
        // Handle the logic to change the plan
        alert('Change plan button clicked. You can implement your logic here.');
    });
});

