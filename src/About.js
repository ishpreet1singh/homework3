function About() {
  return (
    <div style={aboutSectionStyle}>
      <h2 style={headingStyle}>A Closer Look at Customer Favorites</h2>
      <p>One of the highlights of Ishpreet Restaurant is the consistently positive feedback from its patrons. Customers frequently praise the authenticity of the flavors, the warm hospitality, and the variety available on the menu.</p>

      <p><strong>Savory Dishes:</strong> The restaurant’s chole bhature is a fan favorite, featuring fluffy bread paired with spiced chickpeas. Another must-try is the biryani, known for its fragrant rice and tender meat or vegetable options.</p>

      <p><strong>Street Food Specials:</strong> If you’re in the mood for Indian street food, the pani puri and chaat platters are top recommendations. These dishes are perfect for sharing and bring a burst of tangy, spicy, and sweet flavors.</p>

      <p><strong>Sweets and Desserts:</strong> The laddu and barfi selections are often highlighted in customer reviews, showcasing the restaurant’s expertise in crafting traditional sweets.</p>

      <h2 style={headingStyle}>Why Locals Love Ishpreet Restaurant</h2>
      <p>There’s more to Ishpreet Restaurant than just the food. The atmosphere is warm and inviting, making it a favorite spot for family dinners and casual meetups. The staff is known for their friendly demeanor and attentiveness, ensuring that every customer feels valued.</p>

      <p>Reviews often mention how the team goes above and beyond to accommodate special requests, whether it’s adjusting spice levels or preparing allergen-free dishes. This commitment to customer satisfaction reinforces the trust and loyalty that the restaurant has built within the community.</p>
    </div>
  );
}

const aboutSectionStyle = {
  maxWidth: '800px',
  margin: '40px auto',
  padding: '0 20px',
  lineHeight: '1.6',
  color: '#333',
  backgroundColor: '#fffaf0',
};

const headingStyle = {
  color: '#d32f2f',
  marginBottom: '20px',
  textAlign: 'center',
};

export default About;
