'use client'
import Top from "./top";
import Left from "./left";
import Head from "next/head";
import { getEducationalLeaderAPI } from "@actions/educationalLeaderApi";
import { getSolutionProviderGetApi } from "@actions/solutionProviderManagementApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginData, selectSolutionProvideDetails, selectUserData, setSolutionProvideDetails } from "@store/slices/userDetailsSlice";

export default function SolutionProvidersLayout({ children, ...pageProps }) {
  const dispatch = useDispatch()
  const solutionProvideProfile = useSelector(selectSolutionProvideDetails)
  const userData = useSelector(selectUserData)
  const loginData = useSelector(selectLoginData);
  const title = `${pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to ERDI`;

  const getProfileData = async () => {
    try{
      let response = await getEducationalLeaderAPI(userData?.userId)
      if(response?.code == 200){
        const solutionProviderId = response?.data.user.serviceProviderId ?? null
        if(solutionProviderId){
          let profielResponse = await getSolutionProviderGetApi(solutionProviderId)
          if(profielResponse?.code == 200){
            let profile = profielResponse?.data.data ?? null
            if(profile){
              dispatch(setSolutionProvideDetails(profile))
            }
          }
        }
      }
    }catch(error){
      console.log('error while getting solution provider profiel', error)
    }
  }

  useEffect(() => {
    if(!solutionProvideProfile){
      getProfileData()
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <style data-fullcalendar></style>
        <meta name="google-site-verification" content="W6XmndxNINBwm3c3p5KH0Sar2-92Hufz7t4kD0-d1HA" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fevIcon.ico" />
      </Head>
      <>
        <Top loginData={loginData} details={solutionProvideProfile} topTab={pageProps.topTab} pageTitle={pageProps.pageTitle} pageName={pageProps.pageName} breadCrumb={pageProps.breadCrumb} />
        <Left />
        <div className={`pb-6 xl:pb-[1.25vw]`}>
          <main>
            {children}
          </main>
        </div>
      </>
    </>
  );
}
