import { Mail, Phone, SquarePen, Trash, User, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deleteAVAProfile,
  getProfile,
  updateProfile,
} from "../../store/userSlice";
import { API_URL, phoneNumberPattern } from "../../utils";
import ModalChangePin from "../modal/ModalChangePin";

const Profile = () => {
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    profile_picture: "",
  });
  const [errorMsg, setErrorMsg] = useState({});

  const { userData, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      setFormData({
        fullName: userData.fullname || "",
        phone: userData.phone || "",
        email: userData.email || "",
        profile_picture: null,
      });
    }
  }, [userData]);

  const handleInput = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        setFormData((prev) => ({ ...prev, [name]: file }));
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileDelete = async (e) => {
    e.preventDefault();

    if (preview && !userData?.profile_picture) {
      setFormData((prev) => ({ ...prev, profile_picture: null }));
      setPreview(null);
      return;
    }

    if (userData?.profile_picture) {
      try {
        await dispatch(deleteAVAProfile()).unwrap();

        toast.success("Delete foto profile berhasil!", {
          position: "top-center",
          autoClose: 1000,
        });

        setFormData((prev) => ({ ...prev, profile_picture: null }));
        setPreview(null);
      } catch (error) {
        toast.error(error?.message || "Delete foto profile gagal", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    }
  };

  const validateInput = () => {
    const newErrors = {};

    /* Fullname */
    if (!formData.fullName) {
      newErrors.fullName = "Kolom tidak boleh kosong!";
    }

    /* Phone */
    if (!formData.phone) {
      newErrors.phone = "Kolom tidak boleh kosong!";
    } else if (!phoneNumberPattern.test(formData.phone)) {
      newErrors.phone =
        "Format tidak valid! Minimal 10 Karater dan Maksimal 13 karakter.";
    }

    setErrorMsg(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();

    const profileData = new FormData();
    profileData.append("fullname", formData.fullName);
    profileData.append("phone", formData.phone);
    profileData.append("profile_picture", formData.profile_picture);

    const isValid = validateInput();
    if (!isValid) return;

    try {
      await dispatch(updateProfile(profileData)).unwrap();
      await dispatch(getProfile());
      toast.success("Data profile berhasil diubah!", {
        position: "top-center",
        autoClose: 1000,
      });

      setFormData((prev) => !prev);
    } catch (error) {
      toast.error(error.message || "update profile gagal", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <section className="p-10 flex flex-col gap-5">
      <div className="flex gap-5 items-center">
        <Users size={30} className="text-blue-700" />
        <h1 className="text-xl">Profile</h1>
      </div>

      {/* Edit Profile Section */}
      <section className="border-1 flex flex-col gap-5 border-gray-400 p-10">
        <form>
          <h1 className="text-xl mb-3">Profile Picture</h1>

          {/* Profile Picture */}
          <div className="flex items-center gap-5">
            {/* Photo Preview */}
            <div className="w-40 h-40 flex items-center justify-center rounded-xl bg-gray-200 mb-4 shadow-lg shadow-gray-500/100 ">
              {preview ? (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="w-full h-full rounded-xl object-cover"
                />
              ) : userData?.profile_picture ? (
                <img
                  src={`${API_URL}/img/${userData?.profile_picture}`}
                  alt="Profile Picture"
                  className="w-full h-full rounded-xl object-cover"
                />
              ) : (
                <User size={100} className="text-gray-400" />
              )}
            </div>
            {/* Photo Preview */}

            <div className="flex flex-col gap-3">
              <label
                htmlFor="profile_picture"
                className="flex items-center gap-2 bg-blue-600 cursor-pointer text-white p-3 rounded-lg"
              >
                <SquarePen size={20} />
                <input
                  type="file"
                  name="profile_picture"
                  id="profile_picture"
                  accept="image/*"
                  className="hidden"
                  onChange={handleInput}
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
          {error ? (
            <span className="text-red-600">{error}</span>
          ) : (
            <span className="text-gray-600">
              The profile picture must be 512 x 512 pixels or less
            </span>
          )}

          {/* Profile Picture */}

          {/* Name Field */}
          <div className="flex flex-col gap-3 mt-3">
            <h1 className="text-xl">Full Name</h1>
            <div className="group flex items-center gap-2 bg-gray-50 border border-gray-300 p-2 rounded-lg focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500">
              <User
                size={20}
                className="text-gray-400 group-focus-within:text-gray-700"
              />
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter Full Name"
                className="bg-transparent outline-none flex-1"
                value={formData.fullName}
                onChange={handleInput}
              />
            </div>
            {errorMsg.fullName && (
              <p className="text-sm text-red-500">{errorMsg.fullName}</p>
            )}
          </div>
          {/* Name Field */}

          {/* Phone Field */}
          <div className="flex flex-col gap-3 mt-2">
            <h1 className="text-xl">Phone</h1>
            <div className="group flex items-center gap-2 bg-gray-50 border border-gray-300 p-2 rounded-lg focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500">
              <Phone
                size={20}
                className="text-gray-400 group-focus-within:text-gray-700"
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter Your Number Phone"
                className="bg-transparent outline-none flex-1"
                value={formData.phone}
                onChange={handleInput}
              />
            </div>
            {errorMsg.phone && (
              <p className="text-sm text-red-500">{errorMsg.phone}</p>
            )}
          </div>
          {/* Phone Field */}

          {/* Email Field */}
          <div className="flex flex-col gap-3 mt-2">
            <h1 className="text-xl">Email</h1>
            <div className="group flex items-center gap-2 bg-gray-50 border border-gray-300 p-2 rounded-lg focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500">
              <Mail
                size={20}
                className="text-gray-400 group-focus-within:text-gray-700"
              />
              <input
                type="text"
                name="email"
                id="email"
                disabled
                placeholder="Enter Your Email"
                className="bg-transparent outline-none flex-1 text-gray-500"
                value={formData.email}
                onChange={handleInput}
              />
            </div>
          </div>
          {/* Email Field */}
        </form>
        {/* Edit Profile Section */}

        {/* Change Password Field */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl">Password</h1>
          <Link className="text-blue-400" to="/profile/change-password">
            Change Password
          </Link>
        </div>
        {/* Change Password Field */}

        {/* Change PIN Field */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl">Pin</h1>
          <button
            className=" w-full  text-left text-blue-400 cursor-pointer"
            to="/profile/change-pin"
            onClick={() => setShowModal(true)}
          >
            Change Pin
          </button>
        </div>
        {/* Change PIN Field */}

        <button
          className="bg-blue-700 p-2 text-white rounded-lg cursor-pointer"
          onClick={handleSubmitData}
        >
          Submit
        </button>
      </section>

      {showModal && (
        <ModalChangePin
          title={"Change PIN"}
          label={"Change pin"}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
};

export default Profile;
