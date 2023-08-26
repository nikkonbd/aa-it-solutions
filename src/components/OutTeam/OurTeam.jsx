import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className="py-20">
      <div className="my-8">
        <div>
          <h2 className="text-center text-1xl text-[#0dcaf0]">Team Member</h2>
          <h1 className="text-4xl font-semibold text-center mt-3">
            Our Team Members
          </h1>
        </div>
      </div>
      <div className="grid md:max-w-6xl lg:max-w-7xl mx-auto md:grid-cols-4 lg:grid-cols-4 gap-6 px-12">
      <figure className="snip1205 shadow-md">
        <Card
          className="w-full md:w-72 py-4"
          style={{
            backgroundImage:
              "url(https://validthemes.net/site-template/diglu/assets/img/shape/11.png)",
          }}
        >
          <CardHeader
            floated={false}
            className="rounded-full h-44 w-44 mx-auto border-2 "
          >
            <img
              className="rounded-full "
              src="https://validthemes.net/site-template/diglu/assets/img/team/v3.jpg"
              alt="profile-picture"
            />
            <i className="flex justify-center items-center gap-2">
                <FaFacebook className="text-white "></FaFacebook>
                <FaTwitter className="text-white"></FaTwitter>
                <FaWhatsapp className="text-white"></FaWhatsapp>
              </i>
              <a href="#"></a>
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
        </figure>
        <figure className="snip1205 shadow-md">
        <Card
          className="w-full md:w-72 py-4"
          style={{
            backgroundImage:
              "url(	https://validthemes.net/site-template/diglu/assets/img/shape/11.png)",
          }}
        >
          <CardHeader
            floated={false}
            className="rounded-full h-44 w-44 mx-auto border-2"
          >
            <img
              className="rounded-full "
              src="https://validthemes.net/site-template/diglu/assets/img/team/v2.jpg"
              alt="profile-picture"
            />
            <i className="flex justify-center items-center gap-2">
                <FaFacebook className="text-white "></FaFacebook>
                <FaTwitter className="text-white"></FaTwitter>
                <FaWhatsapp className="text-white"></FaWhatsapp>
              </i>
              <a href="#"></a>
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
        </figure>
        <figure className="snip1205 shadow-md">
          <Card
            className="w-full md:w-72 py-4"
            style={{
              backgroundImage:
                "url(	https://validthemes.net/site-template/diglu/assets/img/shape/11.png)",
            }}
          >
            <CardHeader
              floated={false}
              className="rounded-full mx-auto w-44 h-44 border-2"
            >
              <img
                className="rounded-full "
                src="https://validthemes.net/site-template/diglu/assets/img/team/v1.jpg"
                alt="profile-picture"
              />
             
              <i className="flex justify-center items-center gap-2">
                <FaFacebook className="text-white "></FaFacebook>
                <FaTwitter className="text-white"></FaTwitter>
                <FaWhatsapp className="text-white"></FaWhatsapp>
              </i>
              <a href="#"></a>
              
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Natalie Paisley
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </Card>
        </figure>
        <figure className="snip1205 shadow-md">
          <Card
            className="w-full md:w-72 py-4"
            style={{
              backgroundImage:
                "url(	https://validthemes.net/site-template/diglu/assets/img/shape/11.png)",
            }}
          >
            <CardHeader
              floated={false}
              className="rounded-full mx-auto w-44 h-44 border-2"
            >
              <img
                className=""
                src="	https://validthemes.net/site-template/diglu/assets/img/team/v5.jpg"
                alt="profile-picture"
              />
              <i className="flex justify-center items-center gap-2">
                <FaFacebook className="text-white "></FaFacebook>
                <FaTwitter className="text-white"></FaTwitter>
                <FaWhatsapp className="text-white"></FaWhatsapp>
              </i>
              <a href="#"></a>
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
              Seth Norwood
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </Card>
        </figure>
      </div>
    </div>
  );
};

export default OurTeam;
