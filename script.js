/*document.addEventListener("DOMContentLoaded", function () {
  const selectPlanButtons = document.querySelectorAll(".select-plan-button");
  const billingCycleSelect = document.getElementById("billing-cycle");
  const paymentForm = document.getElementById("payment-form");
  const selectedPlanDetails = document.getElementById("selected-plan-details");
  const selectedPlan = document.getElementById("selected-plan");
  const selectedInterval = document.getElementById("selected-interval");

  selectPlanButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const planName = event.currentTarget.getAttribute("data-plan");
      selectedPlan.innerText = `Selected Plan: ${planName}`;
      selectedInterval.innerText = `Billing Interval: ${billingCycleSelect.value}`;
      selectedPlanDetails.style.display = "block";
    });
  });

  paymentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Here, you would implement the Stripe API integration to handle subscriptions
    // and store the subscription details in your database.
  });
});*/


document.addEventListener('DOMContentLoaded', function () {
  const changePlanBtn = document.getElementById('changePlanBtn');
  const cancelSubscriptionBtn = document.getElementById('cancelSubscriptionBtn');

  changePlanBtn.addEventListener('click', function () {
      // Handle the logic to change the plan
      alert('Change plan button clicked. You can implement your logic here.');
  });

  cancelSubscriptionBtn.addEventListener('click', function () {
      // Handle the logic to cancel the subscription
      alert('Cancel subscription button clicked. You can implement your logic here.');
  });
});
