import React from "react";
import { styled } from "frontity"



const Home = () => {
    return(
        <>
        <Container>
            <div className="CTA">
                <div className="cta-container">
                    <h1>YOGA FOR ALL</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                    <div className="btn">
                        <button>CLICK</button>
                    </div>
                </div>
            </div>

            <div className="svg-container">
                <div className="blob">
                    <svg perserveaspectratio="xMinYMin meet" className="svg-content" viewBox="0 0 500 550">
                        <path id="Path_3" data-name="Path 3" d="M415.45,218.293c44.448,5.618,90.03-2.714,129.917,17.686,44.641,22.831,98.323,52.787,105.031,102.477,6.783,50.239-56.462,81.062-73.822,128.692C560.26,511.911,590,574.155,553.381,604.64c-36.23,30.165-92.3,8.5-137.931-3.341-36.388-9.443-61.177-38.87-94.17-56.891-40.22-21.968-97.585-20.036-119.926-60.05-22.668-40.6,1.379-90.1,10.652-135.667,10.643-52.3,2.322-120.074,47.255-148.874,45.245-29,102.873,11.737,156.19,18.475" transform="translate(-171.904 -123.801)" fill="#fec89a"/>
                        <path id="Path_4" data-name="Path 4" d="M400.016,209.711c38.838-4.48,147.581-110.325,182.215-92.189,40.909,21.421,19.341,163.791,36.444,206.686,17.239,43.235-5.418,91.815-25.479,133.815-17.973,37.628-48.227,65.8-81.729,90.631-33.825,25.07-69.477,55.833-111.451,52.546-41.246-3.23-71.418-38.635-99.453-69.06-23.349-25.34-34.066-57.333-46.589-89.433-13.448-34.47-40.033-69.01-29-104.328,11.043-35.365,53.416-47.5,83.268-69.447,30.072-22.1,54.7-54.943,91.779-59.22" transform="translate(547.628 778.862) rotate(-160)" fill="#d8e2dc"/>
                    </svg>

                </div>
            </div>



            <div className="svg-container-text">
                <div className="text">
                    <svg viewBox="0 0 393.368 243.743" className="svg-content">
                        <defs>
                            <linearGradient id="linear-gradient" x1="0.095" x2="0.655" y2="0.625" gradientUnits="objectBoundingBox">
                            <stop offset="0" stop-color="#fedad4"/>
                            <stop offset="0.066" stop-color="#d8e2dc"/>
                            <stop offset="0.28" stop-color="#ffe5d9"/>
                            <stop offset="0.452" stop-color="#ffd7ba"/>
                            <stop offset="0.59" stop-color="#fec89a"/>
                            <stop offset="0.813" stop-color="#cfb1ac"/>
                            <stop offset="1" stop-color="#fec5bb"/>
                            </linearGradient>
                        </defs>
                    <path id="Path_17" data-name="Path 17" d="M2.7,6.052V-3.233H9.451V-39.618H2.7V-48.9H27.782a58.179,58.179,0,0,1,12.405.968,12.627,12.627,0,0,1,7.032,4.7,13.661,13.661,0,0,1,2.963,8.751q0,8.02-7.743,11.338,9.877,3.674,9.877,13.156A14.65,14.65,0,0,1,49.254-.645a15.175,15.175,0,0,1-7.9,5.294q-4.84,1.4-13.571,1.4ZM23.752-27.213h4.03q4.188,0,6.163-1.422t1.975-5.017q0-3.279-1.916-4.622t-6.7-1.343H23.752Zm0,23.981h4.03q5.491,0,7.664-1.58t2.173-5.57q0-4.188-2.351-5.867t-7.487-1.679h-4.03Zm91.893,0V6.052H98.9L86.5-18.008H80.207V-3.233h6.874V6.052H58.36V-3.233h7.546V-39.618H58.36V-48.9H91.506q9.363,0,13.492,4.721a15.8,15.8,0,0,1,4.128,10.687q0,9.363-9.521,13.669l8.929,16.593ZM80.207-26.779h4.9q9.087,0,9.087-6.479a5.629,5.629,0,0,0-2.074-4.78,9.217,9.217,0,0,0-5.709-1.58h-6.2Zm37.966,32.83V-3.233h6.6V-39.618h-6.6V-48.9h48.435V-31.48H156.1v-8.138H139.072v12.682h13.748v9.284H139.072v14.42H156.1V-11.45h10.509v17.5ZM226.027-3.233V6.052H199V-3.233h7.032l-2.607-9.442H189.167l-2.924,9.442h7.348V6.052H169.256V-3.233h6.8l10.706-36.386h-7.309V-48.9H215.32v9.284h-7.388L219.469-3.233Zm-24.85-17.5-4.583-16.553-4.938,16.553Zm36.7,26.786V-3.233h8.257V-39.618h-8.257v12.8h-9.442V-48.9h49.818v22.084h-9.324v-12.8h-8.494V-3.233h8.257V6.052Zm45.314,0V-3.233h6.874V-39.618h-6.874V-48.9h26.548v9.284h-5.768v12.05h14.973v-12.05h-5.57V-48.9h26.351v9.284h-6.874V-3.233h6.874V6.052H313.376V-3.233h5.57V-18.245H303.973V-3.233h5.768V6.052Zm61.67,0V-3.233h6.6V-39.618h-6.6V-48.9H393.3V-31.48H382.789v-8.138H365.762v12.682H379.51v9.284H365.762v14.42h17.027V-11.45H393.3v17.5ZM21.421,100.8,5.737,54.776H-.07V45.492H24.7v9.284H19.011l8.929,26.39,8.375-26.39H31.338V45.492H51.091v9.284h-5.1L55,81.167l8.652-26.39H58.163V45.492H80.168v9.284H74.2L59.032,100.8H48.76L40.108,75.715,31.93,100.8Zm93.236-56.179q14.222,0,22.381,8.217a27.357,27.357,0,0,1,8.158,20.03,27.3,27.3,0,0,1-8.178,20.05q-8.178,8.2-22.361,8.2-14.736,0-22.637-8.435a28.04,28.04,0,0,1-7.9-19.813,27.445,27.445,0,0,1,8.119-20.01Q100.356,44.623,114.657,44.623Zm0,10.035A14.093,14.093,0,0,0,103.931,59.4q-4.405,4.741-4.4,13.906,0,8.1,4.346,12.958a13.886,13.886,0,0,0,10.785,4.859A14.127,14.127,0,0,0,125.4,86.362q4.425-4.761,4.425-13.729,0-8.02-4.227-13A13.688,13.688,0,0,0,114.657,54.658Zm93.71,36.5v9.284h-16.74l-12.409-24.06H172.93V91.162H179.8v9.284H151.082V91.162h7.546V54.776h-7.546V45.492h33.146q9.363,0,13.492,4.721A15.8,15.8,0,0,1,201.849,60.9q0,9.363-9.521,13.669l8.929,16.593ZM172.93,67.616h4.9q9.087,0,9.087-6.479a5.629,5.629,0,0,0-2.074-4.78,9.217,9.217,0,0,0-5.709-1.58h-6.2Zm36.9,32.83V91.162h7.388V54.776h-7.388V45.492h28.642v9.284h-6.953V91.162h6.4v9.284Zm32.356,0V91.162h6.426L231.953,71.587l17.993-16.81h-6.616V45.492h26.825v9.284H263.44l-15.5,15.143,18.026,21.242h5.689v9.284ZM59.15,185.557v9.284H42.41L30,170.781H23.713v14.776h6.874v9.284H1.866v-9.284H9.411V149.171H1.866v-9.284H35.012q9.363,0,13.492,4.721a15.8,15.8,0,0,1,4.128,10.687q0,9.363-9.521,13.669l8.929,16.593ZM23.713,162.011h4.9q9.087,0,9.087-6.479a5.629,5.629,0,0,0-2.074-4.78,9.217,9.217,0,0,0-5.709-1.58h-6.2Zm37.966,32.83v-9.284h6.6V149.171h-6.6v-9.284h48.435V157.31H99.605v-8.138H82.578v12.682H96.326v9.284H82.578v14.42H99.605V177.34h10.509v17.5Zm82.648-9.284v9.284H115.368v-9.284h6.993V149.171h-6.993v-9.284h28.958q10.114,0,15.625,4.741t5.511,12.761a17.793,17.793,0,0,1-1.936,8.316,14.872,14.872,0,0,1-4.958,5.728,18.65,18.65,0,0,1-6.914,2.726,54.085,54.085,0,0,1-9.738.731h-5.254v10.667Zm-7.664-19.832H138.8q7.348,0,9.462-2.39a8.649,8.649,0,0,0,2.114-5.946,8.772,8.772,0,0,0-1.462-5.116,6.007,6.007,0,0,0-3.358-2.607,27.389,27.389,0,0,0-6.2-.494h-2.686Zm32.949,29.116v-9.284h6.6V149.171h-6.6v-9.284h48.435V157.31H207.538v-8.138H190.51v12.682h13.748v9.284H190.51v14.42h17.027V177.34h10.509v17.5Zm107.853-9.284v9.284H250.442v-9.284h7.032l-2.607-9.442H240.6l-2.923,9.442h7.348v9.284H220.693v-9.284h6.8l10.706-36.386h-7.309v-9.284h35.872v9.284H259.37l11.536,36.386Zm-24.85-17.5L248.032,151.5l-4.938,16.553Zm36.7,26.786v-9.284h8.257V149.171h-8.257v12.8h-9.442V139.887h49.818v22.084h-9.324v-12.8h-8.494v36.386h8.257v9.284Z" transform="translate(0.07 48.902)" opacity="0.9" fill="url(#linear-gradient)"/>
                    </svg>
                </div>     
            </div>
   
        </Container>
        </>
    )
}

export default Home

const Container = styled.div`
    // mobile view
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    font-family: rockwell ;
    color:#707070;
    .svg-container{
        display:inline-block;
        position:relative;
        width:100%;
        height:100%;
        overflow:hidden;
        vertical-align: middle;
        margin-bottom:0rem;
    }
    .CTA{
        display: flex;
        flex-direction:column;
        align-items:center;
        padding:4rem 1rem 0.5rem;
        .cta-container{
            height:100%;
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            align-items:center;
            h1{
                text-align: center;
                font-size:5vh;
                margin-bottom: 2rem;
            }
            p{
                max-width:45ch;
                text-align:center;
                margin-bottom:2rem;
                font-family:montserrat;
            }
            .btn{
            display:flex;
            justify-content: center;
            align-items: center;
                button{
                height:6rem;
                width:6rem;
                border-radius: 50%; 
                background:#584A3E;
                color:white
                }
            }
        }   
    }
    //desktop view
    @media (min-width: 600px){
    padding:0rem 2rem;
    background:white;
    display: flex;
    flex-direction: row;
    height:92vh;
    width:100%;
    .CTA{
        width:33%;
        height:100%;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        .cta-container{
            height:100%;
            display:flex;
        h1{
            font-style:italic;
            font-size:54px;
            font-family: rockwell ;
            color:#707070
        }
        p{
            text-align:left;
            font-size:24px;
            line-height: 1.3em;
            color:#707070
        }
        .btn{
            display:flex;
            justify-content: center;
            align-items: center;
                button{
                height:10em;
                width:10em;
                border-radius: 50%; 
                background:#584A3E;
                color:white
                }
            }
    }
        
    }
    .svg-container{
        width:34%;
        height:100%;
        display:flex;
        align-items: center;
        justify-content: space-around;
        .blob{
            height:50%;
            width:100%;
            display:flex;
            justify-content: center;
            align-items: center;
        }
    }
    .svg-container-text{
        display:inline-block;
        width:33%;
        height:100%;
        display:flex;
        align-items: center;
        justify-content: space-around;
        .text{
            height:50%;
            width:100%;
            display:flex;
            justify-content: center;
            align-items: center;
        }
        .svg-content{
            display:inline-block;
        }
    }
}
@media (max-width:1000px) {
    *{
        flex-basis:100%;
    }
    .svg-container-text{
        display:none;
        
    }
}
`