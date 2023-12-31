import React, { useContext } from "react";
import CustomImage from "./CustomImage";
import logoImage from "../assets/images/ItemLogo.svg";
import CustomCardDescription from "./CustomCardDescription";
import { ICardProps } from "../types";
import CustomButton from "./CustomButton";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import { JobPortalContext } from "../App";
import {
  applyNowStr,
  currentStr,
  employeesStr,
  experienceStr,
  externalApplyStr,
  formatIntegerPartInINR,
  monthStr,
  partTimeDescription,
  yearsStr,
} from "../constants";

const CustomCard = (props: ICardProps) => {
  const formData: any = useContext(JobPortalContext);
  const { handleEdit, handleDelete, handleApply } = formData;

  const {
    id,
    jobTitle,
    industry,
    companyName,
    maxExperience,
    minExperience,
    location,
    remoteType,
    maxSalary,
    minSalary,
    totalEmployee,
    applyType,
  } = props;

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-md">
      <div className="grid grid-cols-10">
        <div className="col-span-1">
          {" "}
          <CustomImage logoImage={logoImage} altText="Logo Image" />
        </div>
        <div className="col-span-8 flex flex-col gap-4">
          <div>
            <CustomCardDescription height="h-32" fontSize="text-2xl">
              {jobTitle}
            </CustomCardDescription>
            <CustomCardDescription>
              {companyName} - {industry}
            </CustomCardDescription>
            <CustomCardDescription color="text-gray-custom">
              {location} - ({remoteType})
            </CustomCardDescription>
          </div>
          <div className="flex flex-col gap-2">
            <CustomCardDescription>{partTimeDescription}</CustomCardDescription>
            <CustomCardDescription>
              {experienceStr} ({minExperience} - {maxExperience} {yearsStr})
            </CustomCardDescription>
            <CustomCardDescription>
              {currentStr} {formatIntegerPartInINR(Number(minSalary))} -{" "}
              {formatIntegerPartInINR(Number(maxSalary))} / {monthStr}
            </CustomCardDescription>
            <CustomCardDescription>
              {totalEmployee} {employeesStr}
            </CustomCardDescription>
          </div>
          <div>
            {applyType &&
              (applyType === "Quick apply" ? (
                <CustomButton width={"w-36"} handleClick={handleApply}>
                  {applyNowStr}
                </CustomButton>
              ) : (
                <CustomButton
                  width={"w-44"}
                  handleClick={handleApply}
                  color="text-primary"
                  backgroundColor="bg-transparent"
                  border="border border-2"
                >
                  {externalApplyStr}
                </CustomButton>
              ))}
          </div>
        </div>
        <div className="col-span-1 flex justify-end gap-2">
          <CustomButton
            backgroundColor="bg-error"
            handleClick={() => handleDelete(id)}
          >
            <TrashIcon className="w-6 h-6 text-white-600" />
          </CustomButton>
          <CustomButton handleClick={() => handleEdit(id)}>
            <PencilIcon className="w-6 h-6 text-white-600" />
          </CustomButton>{" "}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
