"use client";
import { useCallback, useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-scroll";
import Image from "next/image";

const Desktop = () => {
  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!open);
    console.log(open);
  };

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "Android Large - 2" to the project
  }, []);

  return (
    <div className={styles.desktop1}>
      <Image className={styles.desktop1Child} alt="" src="/rectangle-241.svg" />
      <section id="home" className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.vectorParent}>
          <Image className={styles.frameItem} alt="" src="/rectangle-255.svg" />
          <header className={styles.group}>
            <div className={styles.loginText}>
              <div className={styles.groupWrapper}>
                <Image
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <div className={styles.theRide}>the ride</div>
            </div>
            <div className={styles.driversText}>
              <div className={styles.clientsText}>
                <div className={styles.homeBusinessConnectContainer}>
                  <div className={styles.menu}>
                    <Link
                      to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-50}
                      activeClass="active-link"
                    >
                      Home
                    </Link>
                    <Link
                      to="business_connect"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-50}
                      activeClass="active-link"
                    >
                      Business connect
                    </Link>
                    <Link
                      to="london_drivers"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-50}
                      activeClass="active-link"
                    >
                      London Drivers
                    </Link>
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-50}
                      activeClass="active-link"
                    >
                      About
                    </Link>
                  </div>
                </div>
                <div
                  className={styles.groupParent}
                  onClick={() => toggleMobileMenu()}
                >
                  <div className={styles.group1} />
                  <div className={styles.group2} />
                  <div className={styles.group3} />
                </div>
              </div>
            </div>
            {open && (
              <div className={styles.mobileMenu}>
                <Link
                  onClick={() => setOpen(false)}
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  activeClass="active-link"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="business_connect"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  activeClass="active-link"
                >
                  Business connect
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="london_drivers"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  activeClass="active-link"
                >
                  London Drivers
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  activeClass="active-link"
                >
                  About
                </Link>
              </div>
            )}
          </header>
          {/* Mobile menu starts here */}

          {/* Mobile menu ends here */}
          <div className={styles.frameWrapper}>
            <div className={styles.textParent}>
              <div className={styles.text}>
                <div className={styles.wereLaunchingForContainer}>
                  <span>
                    <span className={styles.wereLaunchingFor}>
                      <span className={styles.were}>{`We’re `}</span>
                      <span className={styles.launching}>launching</span>
                      <span className={styles.for}> for</span>
                    </span>
                    <span className={styles.span}>
                      <span className={styles.span1}>{` `}</span>
                    </span>
                  </span>
                  <span className={styles.businessesFirst}>
                    <span>
                      <span>businesses</span>
                      <span className={styles.span2}>{` `}</span>
                      <span className={styles.first}>first</span>
                      <span className={styles.span3}>{` `}</span>
                    </span>
                  </span>
                  <span className={styles.andThenEveryone}>
                    and then everyone else.
                  </span>
                </div>
                <div className={styles.textGroup}>
                  <div className={styles.text1} />
                  <div className={styles.text2} />
                </div>
              </div>
              <div className={styles.businessIntroFrame}>
                <Image
                  className={styles.arrow3Icon}
                  loading="lazy"
                  alt=""
                  src="/arrow-3@2x.png"
                />
                <div className={styles.driversFrame}>
                  <div className={styles.clientConnectionText}>
                    <div className={styles.clientConnectionTextInner}>
                      <Image
                        className={styles.frameInner}
                        loading="lazy"
                        alt=""
                        src="/line-8.svg"
                      />
                    </div>
                    <div className={styles.arrowFrame}>
                      <div className={styles.driversText1}>
                        <Image
                          className={styles.arrow3Icon1}
                          alt=""
                          src="/arrow-3-1@2x.png"
                        />
                        <div className={styles.drivers}>Drivers</div>
                      </div>
                      <div className={styles.comingSoonFrame}>
                        <div className={styles.clients}>Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="business_connect" className={styles.clientAppWebPortalText}>
        <div className={styles.invitationFrame}>
          <div className={styles.helloDriversText}>
            <div className={styles.helloDriversTextChild} />
            <div className={styles.businessConnectParent}>
              <div className={styles.businessConnect1}>
                <span className={styles.business}>{`Business `}</span>
                <span className={styles.connect}>connect</span>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.clientAppWebPortalWrapper}>
                  <div
                    className={styles.clientAppWeb}
                  >{`Client App. Web Portal `}</div>
                </div>
                <div className={styles.comingSoon}>Coming soon</div>
              </div>
            </div>
            <div className={styles.businessLogoGroup}>
              <div className={styles.londonLogoFrame}>
                <div className={styles.rideFrame}>
                  <Image
                    className={styles.image67Icon}
                    alt=""
                    src="/image-67@2x.png"
                  />
                  <div className={styles.bookARideContainer}>
                    <p className={styles.bookARide}>Book a ride</p>
                    <p className={styles.easyForYou}>
                      <b>Easy for you</b>
                    </p>
                  </div>
                  <Image
                    className={styles.plusSign0071Icon}
                    loading="lazy"
                    alt=""
                    src="/plus-sign-007-1.svg"
                  />
                </div>
                <div className={styles.rideFrame1}>
                  <Image
                    className={styles.image67Icon1}
                    alt=""
                    src="/image-67-1@2x.png"
                  />
                  <div className={styles.teamTravelWeTakeCareOfEvWrapper}>
                    <div className={styles.teamTravelWeContainer}>
                      <p className={styles.teamTravel}>Team travel</p>
                      <p className={styles.weTakeCareOfEverything}>
                        <b>We take care of everything</b>
                      </p>
                    </div>
                  </div>
                  <Image
                    className={styles.plusSign0071Icon1}
                    alt=""
                    src="/plus-sign-007-1-1.svg"
                  />
                </div>
                <div className={styles.rideFrame2}>
                  <div className={styles.privacyAndSecurityTravelInWrapper}>
                    <div className={styles.privacyAndSecurityContainer}>
                      <p
                        className={styles.privacyAndSecurity}
                      >{`Privacy and security `}</p>
                      <p className={styles.travelInPeace}>
                        <b>Travel in peace</b>
                      </p>
                    </div>
                  </div>
                  <div className={styles.rideFrameInner}>
                    <div className={styles.g10Parent}>
                      <Image
                        className={styles.g10Icon}
                        loading="lazy"
                        alt=""
                        src="/g10.svg"
                      />
                      <div className={styles.lineSeparator}>
                        <div className={styles.plussignFrame}>
                          <div className={styles.frameGroupFrame}>......</div>
                        </div>
                        <Image
                          className={styles.plusSign0071Icon2}
                          alt=""
                          src="/plus-sign-007-1-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rideFrame3}>
                  <div className={styles.greenUltraLowAndZeroEmissWrapper}>
                    <div className={styles.greenUltraLowAndContainer}>
                      <p className={styles.green}>{`Green `}</p>
                      <p className={styles.ultraLowAndZeroEmission}>
                        <b>Ultra-low and zero emission</b>
                      </p>
                    </div>
                  </div>
                  <div className={styles.lineParent}>
                    <Image
                      className={styles.lineIcon}
                      loading="lazy"
                      alt=""
                      src="/line-16.svg"
                    />
                    <div className={styles.frameLineFrame}>
                      <div className={styles.plussignplussignFrame} />
                    </div>
                  </div>
                  <div className={styles.loginFrameWrapper}>
                    <div className={styles.loginFrame} />
                  </div>
                  <div className={styles.welcomeGroupFrame}>
                    <div className={styles.tFLlicenceFrame}>
                      <div className={styles.rectangleVectorFrame}>2030</div>
                      <Image
                        className={styles.plusSign0072Icon}
                        loading="lazy"
                        alt=""
                        src="/plus-sign-007-1-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.hiDriversMessageFrame}>
            <div className={styles.welcomeFrame}>
              <div className={styles.businessInvitation}>
                <div className={styles.loginFrame1} />
                <div className={styles.wereExcitedTo}>
                  {`We're excited to invite businesses in the hospitality, travel,
                  and aviation industries and more - including leading brands`}
                </div>
              </div>
              <div className={styles.excitedMessage}>
                <div className={styles.partnersLogos}>
                  <Image
                    className={styles.partnersLogosChild}
                    alt=""
                    src="/rectangle-254.svg"
                  />
                  <div className={styles.wereNotTheContainer}>
                    <span className={styles.wereNotThe}> We’re not the</span>
                    <span className={styles.ordinary}>{` ordinary `}</span>
                  </div>
                  <div className={styles.partnersLogosInner}>
                    <Image
                      className={styles.frameChild1}
                      loading="lazy"
                      alt=""
                      src="/line-11.svg"
                    />
                  </div>
                </div>
                <div className={styles.excitedMessageInner}>
                  <div className={styles.kisspngMarriottInternationalParent}>
                    <Image
                      className={styles.kisspngMarriottInternationalIcon}
                      alt=""
                      src="/kisspngmarriottinternationaljwmarriotthotellimajwmvideographer5b221323d411f5-1@2x.png"
                    />
                    <Image
                      className={styles.kisspngHiltonHotelsResortsIcon}
                      loading="lazy"
                      alt=""
                      src="/kisspnghiltonhotelsresortslogohiltonworldwidesuit5af431768ae3e5-1@2x.png"
                    />
                    <Image
                      className={styles.kisspngQatarAirwaysLogoFliIcon}
                      loading="lazy"
                      alt=""
                      src="/kisspngqatarairwayslogoflightbrand5b630196619396-1@2x.png"
                    />
                    <Image
                      className={styles.kisspngLogoBrandFontLineCIcon}
                      alt=""
                      src="/kisspnglogobrandfontlineclipartnhakhoa2yousmilewesmile5c53538bd2f429-1@2x.png"
                    />
                    <Image
                      className={styles.kisspngLogoAstrazenecaVectoIcon}
                      alt=""
                      src="/kisspnglogoastrazenecavectorgraphicsportablenetworkastrazenecalogobiotechnologylogonyse5bf733aad42e65-1@2x.png"
                    />
                    <Image
                      className={styles.kisspngTShirtBurberryClothIcon}
                      alt=""
                      src="/kisspngtshirtburberryclothingfashionwatcharmani5b2dc3b5754ab9-1@2x.png"
                    />
                  </div>
                </div>
                {/* Mobile partner logo starts here */}

                {/* Mobile partner logo ends here */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="london_drivers" className={styles.driversGroup}>
        <div className={styles.driversGroupChild} />
        <div className={styles.signUpCallToAction}>
          <div className={styles.cityAndCompany}>
            <div className={styles.londonDrivers}>
              <p className={styles.londonDrivers1}>
                <span className={styles.london}>
                  <span className={styles.london1}>London</span>
                  <span className={styles.span4}>{` `}</span>
                </span>
                <span className={styles.drivers1}>Drivers</span>
              </p>
            </div>
            <div className={styles.london2}>
              <p className={styles.london3}>
                <span>
                  <span className={styles.london4}>London</span>
                  <span className={styles.span5}>{` `}</span>
                </span>
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
            </div>
          </div>
          <button className={styles.vectorGroup}>
            <Image
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-256.svg"
            />
            <div className={styles.logIn}>Log-in</div>
          </button>
        </div>
        <div className={styles.driversGroup1}>
          <div className={styles.welcomeMessage}>
            <div className={styles.tflLicenseFrame}>
              <div className={styles.signUpCall}>
                <button className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.welcome}>Welcome</div>
                  <div className={styles.welcomeArrow}>
                    <Image
                      className={styles.welcomeArrowChild}
                      alt=""
                      src="/arrow-3-2.svg"
                    />
                  </div>
                </button>
                <button className={styles.rectangleGroup}>
                  <div className={styles.frameChild2} />
                  <div className={styles.tflOperatingLicence}>
                    TFL operating licence
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.driverDetailsFrame}>
              <div className={styles.lineSeparatorParent}>
                <div className={styles.lineSeparator1}>
                  <Image
                    className={styles.lineSeparatorChild}
                    alt=""
                    src="/rectangle-17.svg"
                  />
                  <div className={styles.pCODetailsFrameParent}>
                    <input className={styles.pCODetailsFrame} type="text" />
                    <Image
                      className={styles.frameChild3}
                      loading="lazy"
                      alt=""
                      src="/line-7.svg"
                    />
                    <div className={styles.emissionDetailsFrame}>
                      <div className={styles.pcoHolderLowContainer}>
                        <p className={styles.blankLine1}>&nbsp;</p>
                        <ul className={styles.pcoHolderLowAndZeroEmissi}>
                          <li className={styles.pcoHolder}>
                            <span>PCO holder</span>
                          </li>
                          <li>
                            <span>{`Low and zero emission cars less then 4 years old `}</span>
                          </li>
                        </ul>
                      </div>
                      <Image
                        className={styles.emissionDetailsFrameChild}
                        alt=""
                        src="/line-8-1.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.rectangleContainer}>
                    <div className={styles.frameChild4} />
                    <div className={styles.welcomegroup}>
                      <b className={styles.signUp}>Sign Up</b>
                      <div
                        className={styles.rectangleinstanceParent}
                        onClick={onGroupContainer2Click}
                      >
                        <div className={styles.rectangleinstance} />
                        <div className={styles.rectangleinstance1} />
                        <div className={styles.rectangleinstance2} />
                      </div>
                    </div>
                  </button>
                </div>
                <div className={styles.hiDriversBeforeContainer}>
                  <span className={styles.hiDriversBeforeContainer1}>
                    <p className={styles.hiDrivers}>
                      <span>
                        <span>{`Hi Drivers, `}</span>
                      </span>
                    </p>
                    <p className={styles.blankLine2}>
                      <span>
                        <span className={styles.blankLine3}>&nbsp;</span>
                      </span>
                    </p>
                    <p className={styles.beforeWeStartLetsChat}>
                      <span>
                        <span className={styles.beforeWeStart}>
                          Before we start, lets chat :)
                        </span>
                      </span>
                    </p>
                    <p className={styles.blankLine4}>
                      <span>
                        <span className={styles.blankLine5}>&nbsp;</span>
                      </span>
                    </p>
                    <p className={styles.withUsYouCanEarnMoreFo}>
                      <span>
                        <span className={styles.withUsYou}>
                          With us, you can earn more! For example: a trip from
                          Westminster to Heathrow could make you £120.
                        </span>
                      </span>
                    </p>
                    <p className={styles.blankLine6}>
                      <span>
                        <span className={styles.blankLine7}>&nbsp;</span>
                      </span>
                    </p>
                    <p className={styles.regards}>
                      <span>
                        <span>{`Regards, `}</span>
                      </span>
                    </p>
                    <p className={styles.onboardingTeam}>
                      <span>
                        <span>Onboarding team.</span>
                      </span>
                    </p>
                    <p className={styles.blankLine9}>&nbsp;</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop;
