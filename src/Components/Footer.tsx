import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        <div>
          <h3 className="text-lg font-bold">Popular Treatments</h3>
          <p>
            <a href="https://en.wikipedia.org/wiki/Cooties">Cooties</a>
          </p>
          <p>
            <a href="https://www.medexpress.co.uk/clinics/weight-loss/">
              Genovian Fat Loss
            </a>
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/Werewolf">Lycanthropy</a>
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/The_Andromeda_Strain">
              Andromeda
            </a>
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/Dray_Prescot_series">
              Chivrel
            </a>
          </p>
        </div>
        {/* NOTE: I assumed by 'two columns at desktop' that they should stack similarly to the site itself. If this isn't the case, adding `className="hidden md:block"` to the next div will hide the second column on smaller devices */}
        <div>
          <h3 className="text-lg font-bold">Useful Links</h3>
          <p>
            <a href="https://www.medexpress.co.uk/delivery">Delivery Info</a>
          </p>
          <p>
            <a href="https://www.medexpress.co.uk/faq">FAQ</a>
          </p>
          <p>
            <a href="https://www.medexpress.co.uk/reviews">Reviews</a>
          </p>
          <p>
            <a href="https://www.medexpress.co.uk/contact#complaints">
              Complaints
            </a>
          </p>
          <p>
            <a href="https://www.medexpress.co.uk/press">Press</a>
          </p>
          <p>
            <a href="https://www.medexpress.co.uk/about-us">About Us</a>
          </p>
          <p>
            <a href="https://www.medexpress.co.uk/contact-us">Returns</a>
          </p>
          <p>
            <a href="https://www.medexpress.co.uk/referrals">Referral Scheme</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
