// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import MeetOurTeamLap from "../../../public/assets/images/meetTeam1.png";
// import MeetOurTeamMob from "../../../public/assets/images/meetTeam2.png";

// const ResponsiveImage = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkWindowWidth = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     // Add event listener to recheck the window width on resize
//     window.addEventListener('resize', checkWindowWidth);

//     // Initial check
//     checkWindowWidth();

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', checkWindowWidth);
//     };
//   }, []);
  
//   return (
//     <div className='flex items-center justify-center'>
//       {isMobile ? (
//         <Image src={MeetOurTeamMob} alt="Mobile Image" width={690} height={440} />
//       ) : (
//         <Image src={MeetOurTeamLap} alt="Desktop Image" width={690} height={440} />
//       )}
//     </div>
//   );
// };

// export default ResponsiveImage;
