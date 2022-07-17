import resPic from "../images/restaurants/res1.jpg";

const restaurantCard = ({ restaurant }) => {
  return (
    <div>
      <a
        className="relative block bg-black group rounded-md"
        href="/restaurant-profile"
      >
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50 rounded-md"
          src={resPic}
          alt=""
        />
        <div className="relative p-8">
          {/* title text */}
          <p className="text-2xl font-bold text-white capitalize">
            {restaurant.name}
          </p>
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            {restaurant.city}
          </p>

          {/* bottom sentence */}
          <div className="mt-32">
            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default restaurantCard;
