import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

const Admission = () => {
  return (
    <div className="pb-16">
      <Card color="transparent" shadow={false}>
        <div className="text-center pt-16">
          <Typography variant="h4" color="blue-gray">
            Admission Now
          </Typography>
          <Typography color="gray" className="mt-1  font-normal">
            A A IT SOLUTIONS.
          </Typography>
        </div>
        <form className="mt-8 mb-2 w-80 md:w-3/6 mx-auto max-w-screen-2xl sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <div className="md:flex space-y-6 md:space-y-0 gap-6">
              <Input className="" size="lg" label="Students Name" />
              <Input size="lg" label="Email Address" />
            </div>
            <div className="md:flex space-y-6 md:space-y-0 gap-6">
              <Input size="lg" label="Fathers Name" />
              <Input size="lg" label="Mothers Name" />
            </div>
            <div className="md:flex space-y-6 md:space-y-0 gap-6">
              <Select size="lg" label="Select Course">
                <Option>Digital Marketing</Option>
                <Option>Graphics Design</Option>
                <Option>Web-Design & Development</Option>
                <Option>Video Editing</Option>
              </Select>
              <Select size="lg" label="Academic Qualification">
                <Option>SSC</Option>
                <Option>HSC</Option>
                <Option>HON'S</Option>
                <Option>MASTERS</Option>
                <Option>Others</Option>
              </Select>
            </div>
            <Input size="lg" label="Your Address" />
            <div className="md:flex space-y-6 md:space-y-0 gap-6">
              <Input type="number" size="lg" label="Mobile Number" />
              <Input type="text" size="lg" label="Occupation" />
              <Select size="lg" label="Select Gender">
                <Option>Male</Option>
                <Option>Female</Option>
                <Option>Others</Option>
              </Select>
            </div>
            <div className="md:flex space-y-6 md:space-y-0 items-center gap-6">
              <div className="form-control w-full max-w-xs">
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
              <Input
                size="lg"
                label="National ID Number or Birth Certificate Number"
              />
            </div>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Admission Now
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Admission;
