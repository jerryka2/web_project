import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
    return (
        <div>
            {/* ============= Left ================= */}
            <div>
                <p>
                    Reserve Your Charging Spot with Ease <br /> Your Trusted EV Partner, Prescript
                </p>
                <div>
                    <img src={assets.group_profiles} alt="" />
                    <p>
                        Discover a seamless way to charge your EV. Browse our extensive network of charging stations, <br />
                        find the perfect spot, and book it instantly – all at your fingertips!
                    </p>
                    <a href="">
                        Book Now <img src={assets.arrow_icon} alt="" />
                    </a>
                </div>
            </div>
            {/* ============= Right ================ */}
            <div>

            </div>
        </div>
    )
}

export default Header
