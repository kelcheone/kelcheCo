import NewsletterSignup from "./Newsletter";

const RenderNewsletter = () => {
  // render only on small screens (mobile) and tablets
  return (
    <div className="lg:hidden block">
      <NewsletterSignup />
    </div>
  );
};

export default RenderNewsletter;
