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
    <div className="pb-20">
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
              src="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/314762540_5611553278890225_4380270442324469988_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEI-sOcVkyd2CLbJFsFYuCWSmBfjwb5RcJKYF-PBvlFwiFRMQZHVerEF3WiHE8hk9lmSk1QvT5WUOPUz6KvEaPP&_nc_ohc=MtGYXF_Eal0AX8TYXR5&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBevquGmlMW9FY-ZU5SWN9Wf1KCFkGsF1lnrVQK0bPTLQ&oe=64EFED02"
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
            Dhimanendu Sarkar
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Founder
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
              src="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/315011787_109514011978865_8680914937792837834_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHWFiwmExzzqTDFpOB6g0kKGOe7fg2KmBQY57t-DYqYFKsgW5LZ9R_zz7i09FVrc_pJnSd8RhNNU9vp213vlWpc&_nc_ohc=8xk3OJjCbdoAX8CppP2&_nc_ht=scontent.fdac138-2.fna&oh=00_AfCSP964hSCR__4NEgrnCWEUiulVTJFBxqCp_rHvEBSbRw&oe=64F0835A"
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
              Dhritiman Sarker
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Graphics Designer
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
                src="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/366366996_672489964924187_9036947057557635576_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGPfJSSNWwj5fACRuC5Z8GUlmS_d8pUNFWWZL93ylQ0VQMr9nt5fO5FyqKRZyNA_8iuFtQlPVtUr44HLIzGroCs&_nc_ohc=Ww3tZZGQuS8AX9DNhln&_nc_ht=scontent.fdac138-2.fna&oh=00_AfA2ykKr3uzNB5hRsDqPeoEvSazPaWjlyjNPtFQLBSHrcA&oe=64F0731F"
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
                Nikkon Mondal
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Front-End Developer
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
                src="	https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/313107258_853220252531686_7773343761535383467_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF-2rI046u7DQKN3FxKE4r6YvzBt5jrgtRi_MG3mOuC1Pac5DVAVnx3AcYWHJheo2gQuW_0rMYNoGr6tbiWbkG_&_nc_ohc=r9M9XZ8KIuUAX8J3Amk&_nc_oc=AQm-xXIWgvUiazGOcUSxpoq867XijZCCLTY2dN_9YgxzPdkT3fPp-8nKLFAnCIHBmGA&_nc_ht=scontent.fdac138-1.fna&oh=00_AfC-dF6B-rRY7MzlkAo2qJySlHH6aQacrHU-XB67vY4pkw&oe=64EFD49C"
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
              Shuvo Jit Kumar
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Web Developer
              </Typography>
            </CardBody>
          </Card>
        </figure>
      </div>
    </div>
  );
};

export default OurTeam;
