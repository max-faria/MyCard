import "./App.css";

import Conference from '../src/assets/techinovation.jpg';
import Concert from '../src/assets/festival.jpg';
import Exhibition from '../src/assets/expo.jpg';
import Photograph from '../src/assets/photograph.jpg';
import Seminar from '../src/assets/healthliving.jpg'
import MyCard from "./components/MyCard";

function App() {
  return (
    <div className="antialiased flex flex-col p-6 gap-4 bg-gray-200 items-center">
      <MyCard
        subtitle="CONFERENCE"
        title="Tech Innovations 2024"
        images={[Conference, Concert, Exhibition]}
        image={Conference}
        text="Join us for a deep dive into the latest technological advancements and innovations. Hear from industry leaders and network with professionals."
        date="April 16, Sunday"
        link=""
      />
      <div className="flex gap-4">
        <MyCard
          subtitle="CONCERT"
          title="Summer Beats Festival"
          image={Concert}
          images={[]}
          text="Experience an unforgettable night with live performances from top artists across various genres. Dance, sing along, and enjoy the festival atmosphere."
          date="May 20, Monday"
          link=""
        />
        <MyCard
          subtitle="EXHIBITION"
          title="Art & Culture Expo"
          image={Exhibition}
          images={[]}
          text="Explore the vibrant world of contemporary art and culture at our annual expo. Featuring works from renowned artists and immersive cultural experiences."
          date="June 01, Saturday"
          link=""
        />
      </div>
      <div className="flex flex-col gap-2 w-full items-center">
        <MyCard
          subtitle="WORKSHOP"
          title="Photography Masterclass"
          image={Photograph}
          images={[]}
          text="Enhance your photography skills with our masterclass. Learn from professional photographers and get hands-on experience in various techniques."
          date="June 05, Wednesday"
          link=""
          thumbnail
        />
        <MyCard
          subtitle="SEMINAR"
          title="Healthy Living Seminar"
          image={Seminar}
          images={[]}
          text="Join us for a seminar on healthy living. Learn about nutrition, fitness, and wellness from experts in the field."
          date="June 10, Monday"
          link=""
          thumbnail
        />
      </div>
    </div>
  );
}

export default App;
