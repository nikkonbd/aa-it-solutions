import React from "react";
import "./Team.css";
import { FaFacebook, FaGoogle, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const Team = () => {
  return (
    <div className="md:max-w-6xl lg:max-w-7xl mx-auto">
      <Card
        className="w-full md:w-[280px] py-4"
        style={{
          backgroundImage:
            "url(	https://validthemes.net/site-template/diglu/assets/img/shape/11.png)",
        }}
      >
        <CardHeader floated={false} className="rounded-full flex items-center justify-center mx-auto w-full">
          <figure className="snip1205">
            <img
              className="rounded-full w-40 h-40"
              src="	https://validthemes.net/site-template/diglu/assets/img/team/v5.jpg"
              alt="profile-picture"
            />
            <i className="flex justify-center items-center gap-3">
              <FaFacebook className="cursor-pointer"></FaFacebook>
              <FaTwitter className="cursor-pointer"></FaTwitter>
              <FaWhatsapp className="cursor-pointer"></FaWhatsapp>
            </i>
          </figure>
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Team;
