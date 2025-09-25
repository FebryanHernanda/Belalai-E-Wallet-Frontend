import { Mail, Phone, SquarePen, Trash, User, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileDelete = () => {
    setPreview(null);
  };

  return (
    <section className="p-10 flex flex-col gap-5">
      <div className="flex gap-5 items-center">
        <Users size={30} className="text-blue-700" />
        <h1 className="text-xl">Profile</h1>
      </div>

      {/* Edit Profile Section */}
      <form className="border-1 flex flex-col gap-5 border-gray-400 p-10">
        <h1 className="text-xl">Profile Picture</h1>

        {/* Profile Picture */}
        <div className="flex items-center gap-5">
          {/* Photo Preview */}
          <div className="w-40 h-40 flex items-center justify-center bg-gray-200">
            {preview ? (
              <img
                src={preview}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={100} className="text-gray-400" />
            )}
          </div>
          {/* Photo Preview */}

          <div className="flex flex-col gap-3">
            <label
              htmlFor="profile-picture"
              className="flex items-center gap-2 bg-blue-600 cursor-pointer text-white p-3 rounded-lg"
            >
              <SquarePen size={20} />
              <input
                type="file"
                name="profile-picture"
                id="profile-picture"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              Change Profile
            </label>

            <button
              className="text-red-500 cursor-pointer flex gap-2 p-3 border-1 border-red-700 rounded-lg"
              onClick={handleFileDelete}
            >
              <Trash />
              <span>Delete Profile</span>
            </button>
          </div>
        </div>
        <span className="text-gray-600">
          The profile picture must be 512 x 512 pixels or less
        </span>
        {/* Profile Picture */}

        {/* Name Field */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl">Full Name</h1>
          <div className="group flex items-center gap-2 bg-gray-50 border border-gray-300 p-2 rounded-lg focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500">
            <User
              size={20}
              className="text-gray-400 group-focus-within:text-gray-700"
            />
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="Enter Full Name"
              className="bg-transparent outline-none flex-1"
            />
          </div>
        </div>
        {/* Name Field */}

        {/* Phone Field */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl">Phone</h1>
          <div className="group flex items-center gap-2 bg-gray-50 border border-gray-300 p-2 rounded-lg focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500">
            <Phone
              size={20}
              className="text-gray-400 group-focus-within:text-gray-700"
            />
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              placeholder="Enter Your Number Phone"
              className="bg-transparent outline-none flex-1"
            />
          </div>
        </div>
        {/* Phone Field */}

        {/* Email Field */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl">Email</h1>
          <div className="group flex items-center gap-2 bg-gray-50 border border-gray-300 p-2 rounded-lg focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500">
            <Mail
              size={20}
              className="text-gray-400 group-focus-within:text-gray-700"
            />
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="Enter Your Email"
              className="bg-transparent outline-none flex-1"
            />
          </div>
        </div>
        {/* Email Field */}

        {/* Change Password Field */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl">Password</h1>
          <a className="text-blue-400" href="#">
            Change Password
          </a>
        </div>
        {/* Change Password Field */}

        {/* Change Password Field */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl">Pin</h1>
          <Link className="text-blue-400" to="/profile/change-pin">
            Change Pin
          </Link>
        </div>
        {/* Change Password Field */}

        <button className="bg-blue-700 p-2 text-white rounded-lg cursor-pointer">
          Submit
        </button>
      </form>
      {/* Edit Profile Section */}
    </section>
  );
};

export default Profile;
