import React, { useContext, useState } from "react";
import { Button, Label, TextInput, FileInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";

function AddMember() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, watch } = useForm();
  const { auth } = useContext(AuthContext);
  const [img, setImg] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("gender", data.gender);
    formData.append("address", data.streetAddress);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("state", data.state);
    formData.append("dateOfBirth", data.dateOfBirth);
    if (img) {
      formData.append("profileImage", img);
    }
    try {
      const response = await axios.post(
        "https://gymrat.uz/api/v1/member/register",
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // A'zo muvaffaqiyatli qo'shilgandan so'ng reset qilish
      reset();
    } catch (error) {
      console.error("A'zoni qo'shishda xato:", error);
    }
  };

  // Parolni tasdiqlash
  const password = watch("password");

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
                  {...register("membershipType")}
                  type="radio"
                  value="Visitor"
                  id="visitor"
                />
                <label htmlFor="visitor">Visitor</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  {...register("membershipType")}
                  type="radio"
                  value="Member"
                  id="member"
                />
                <label htmlFor="member">Member</label>
              </div>
            </div>

            <div className="flex items-start justify-start gap-10">
              <h3 className="text-start">* Required field</h3>
              <div className="flex max-w-md flex-col gap-4">
                <div className="flex items-center justify-center gap-5">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="firstName" value="* FIRST NAME" />
                    </div>
                    <TextInput
                      {...register("firstName", { required: true })}
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="lastName" value="* LAST NAME" />
                    </div>
                    <TextInput
                      {...register("lastName", { required: true })}
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="w-32">
                    <div className="mb-2 block">
                      <Label htmlFor="gender" value="* GENDER" />
                    </div>
                    <select
                      {...register("gender")}
                      id="gender"
                      required
                      className="form-select"
                    >
                      <option value="Male">Erkak</option>
                      <option value="Female">Ayol</option>
                      <option value="Other">Bilmayman</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-5">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="phone" value="PHONE NUMBER" />
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
                      {...register("dateOfBirth", { required: true })}
                      id="dateOfBirth"
                      type="date"
                      placeholder="Date of Birth"
                      required
                    />
                  </div>
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
                  {...register("streetAddress", { required: true })}
                  id="street"
                  type="text"
                  placeholder="Street Address"
                  required
                />
              </div>
              <div className="w-[47%]">
                <div className="mb-2 block">
                  <Label htmlFor="city" value="City" />
                </div>
                <TextInput
                  {...register("city", { required: true })}
                  id="city"
                  type="text"
                  placeholder="City"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-[47%]">
                <div className="mb-2 block">
                  <Label htmlFor="state" value="State" />
                </div>
                <TextInput
                  {...register("state", { required: true })}
                  id="state"
                  type="text"
                  placeholder="State"
                  required
                />
              </div>
              <div className="w-[47%]">
                <div className="mb-2 block">
                  <Label htmlFor="country" value="COUNTRY" />
                </div>
                <TextInput
                  {...register("country", { required: true })}
                  id="country"
                  type="text"
                  placeholder="Country"
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
              {...register("photo")}
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
        </div>

        {/* Password */}
        <div className="password p-6 rounded-xl flex items-center bg-slate-200 justify-center gap-[25px] mt-5">
          <div>
            <h2 className="text-[15px]">Account Password</h2>
          </div>
          <div className="flex items-center justify-between w-[448px] gap-4">
            <div className="w-[47%] flex flex-col">
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="PASSWORD (MINIMUM 8 CHARACTERS)"
                />
              </div>
              <TextInput
                id="password"
                type="password"
                {...register("password", { required: true, minLength: 8 })}
                placeholder="Password"
                required
              />
            </div>
            <div className="w-[47%] flex flex-col">
              <div className="mb-2 block">
                <Label htmlFor="confirm_password" value="CONFIRM PASSWORD" />
              </div>
              <TextInput
                id="confirm_password"
                type="password"
                {...register("confirm_password", {
                  required: true,
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                placeholder="Confirm Password"
                required
              />
              {/* Parol mos kelmasa xabar ko'rsatish */}
              {watch("confirm_password") &&
                watch("confirm_password") !== password && (
                  <p className="text-red-500">Passwords do not match</p>
                )}
            </div>
          </div>
        </div>

        <div className="mt-5 mb-5">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default AddMember;
