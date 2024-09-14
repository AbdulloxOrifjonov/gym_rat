/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Button, Label, TextInput, FileInput, Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";

function AddMember() {
  const [gyms, setGyms] = useState(null);
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { register, handleSubmit, reset, watch } = useForm();
  const { auth, refreshToken } = useContext(AuthContext);

  const resetAccess = async () => {
    setLoading(true);
    await refreshToken();
    setLoading(false);
  };

  const getGyms = async () => {
    try {
      const response = await axios.get("https://gymrat.uz/api/v1/gym/all", {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      setGyms(response.data.data);
    } catch (error) {
      console.log(error);
      if (error.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  useEffect(() => {
    getGyms();
  }, []);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Convert image to base64 string
    let imageBase64 = "";
    if (img) {
      try {
        imageBase64 = await fileToBase64(img);
      } catch (error) {
        console.error("Error converting image to base64:", error);
      }
    }

    formData.append("type", data.type); // Add type to FormData
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("gender", data.gender);
    formData.append("address", data.address);
    formData.append("birthdate", data.birthdate);
    formData.append("password", data.password); // Password qo’shildi
    formData.append("employee_id", localStorage.getItem("employee_id")); // employeeId kiritish kerak
    formData.append("gymId", data.gymId); // gymId kiritish kerak
    formData.append("image", imageBase64); // Add base64 image string to FormData

    try {
      const response = await axios.post("https://gymrat.uz/api/v1/member/register", formData, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "multipart/form-data", // Correct content type for file uploads
        },
      });
      console.log(response.data);
      // reset();
    } catch (error) {
      console.error("A'zoni qo’shishda xato:", error.response?.data?.message || error.message);
      if (error.response?.data?.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="w-max flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Member Details */}
        <div className="member_details address p-6 rounded-t-xl bg-slate-200 flex flex-col items-start justify-start gap-[90px]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-start gap-10">
              <h2>Member Details</h2>
              <div className="flex items-center gap-2">
                <input
                  {...register("type", { required: true })}
                  type="radio"
                  value="1Fit"
                  id="visitor"
                />
                <label htmlFor="visitor">1Fit</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  {...register("type", { required: true })}
                  type="radio"
                  value="usual"
                  id="member"
                />
                <label htmlFor="member">Usual</label>
              </div>
            </div>

            <div className="flex items-start justify-start gap-10">
              <h3 className="text-start">* Required field</h3>
              <div className="flex max-w-md flex-col gap-4">
                <div className="flex items-center justify-center gap-5">
                  <div>
                    <Label htmlFor="gymIds" value="Select Gym" />
                    <Select id="gymIds" {...register("gymId", { required: true })} required>
                      <option value="" disabled>
                        Gymni tanlang
                      </option>{" "}
                      {/* Bo'sh qiymat tanlamaslik uchun */}
                      {gyms?.map((gym) => (
                        <option key={gym._id} value={gym._id}>
                          {gym.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="fullname" value="* FIRST NAME" />
                    </div>
                    <TextInput
                      {...register("fullname", { required: true })}
                      id="fullname"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-32">
                    <div className="mb-2 block">
                      <Label htmlFor="gender" value="gender " />
                    </div>
                    <select
                      {...register("gender", { required: true })}
                      id="gender"
                      className="form-select"
                    >
                      <option value="" disabled>
                        Jinsni tanlang
                      </option>
                      <option value="male">Erkak</option>
                      <option value="female">Ayol</option>
                      <option value="other">Bilmayman</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-5">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="phone" value="phone" />
                    </div>
                    <TextInput
                      {...register("phone")}
                      id="phone"
                      type="phone"
                      placeholder="PHONE NUMBER"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="EMAIL ADDRESS" />
                    </div>
                    <TextInput
                      {...register("email", { required: true })}
                      id="email"
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="dateOfBirth" value="DATE OF BIRTH" />
                    </div>
                    <TextInput
                      {...register("birthdate", { required: true })}
                      id="dateOfBirth"
                      type="date"
                      placeholder="Date of Birth"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="* PASSWORD" />
                  </div>
                  <TextInput
                    {...register("password")}
                    id="password"
                    // value={""}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="address p-6 rounded-b-xl x-1 flex items-start bg-slate-200 justify-start gap-[90px]">
          <div>
            <h2>Address</h2>
          </div>
          <div className="w-[451px] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-[47%]">
                <div className="mb-2 block">
                  <Label htmlFor="streetAddress" value="STREET ADDRESS" />
                </div>
                <TextInput
                  {...register("address", { required: true })}
                  id="street"
                  type="text"
                  placeholder="Address"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="photo p-6 rounded-xl flex items-start bg-slate-200 justify-start gap-[105px] mt-5">
          <div>
            <h2>Photo</h2>
          </div>
          <div className="w-[451px] flex flex-col gap-4">
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Upload file" />
            </div>
            <FileInput
              id="file-upload"
              {...register("image")}
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
        </div>

        <Button type="submit" className="mt-5" disabled={loading}>
          {loading ? "Loading..." : "Add Member"}
        </Button>
      </form>
    </div>
  );
}

export default AddMember;
