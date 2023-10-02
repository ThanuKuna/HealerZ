import React, { useState } from "react";
import wave from "../assets/wave.png";
import "./HealerZ.css";
import logo from "../assets/logo.png";
import adminlogin from "../assets/adminlogin.svg";
import inventorylogin from "../assets/inventorylogin.svg";
import doctorlogin from "../assets/doctorlogin.svg";
import clubadminlogin from "../assets/clubadminlogin.svg";

import { IconButton } from "@mui/material";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MedicationIcon from "@mui/icons-material/Medication";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Adminlogin from "./login/AdminLogin";
import Inventorylogin from "./login/InventoryLogin";
import Doctorlogin from "./login/DoctorLogin";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

function HealerZ() {
  return (
    <div>
      <div></div>
      <div id="homes">
        <img className="wave" src={wave} alt="Wave" />
        <a href="#loginhome">
          <img className="loginlogoo" src={logo} alt="" />
        </a>
        <div>
          <ul className="loginselect">
            <li className="nav-item nav-link nav-hover navicoon">
              <a className="nav-link" href="#adminlogin">
                <IconButton aria-label="delete">
                  <AdminPanelSettingsIcon />
                </IconButton>
                <span className="lettnav">Admin Login</span>
              </a>
            </li>
            <li className="nav-item nav-link nav-hover navicoon">
              <a className="nav-link" href="#inventorylogin">
                <IconButton aria-label="delete">
                  <AddShoppingCartIcon />
                </IconButton>
                <span className="lettnav">Inventory Login</span>
              </a>
            </li>
            <li className="nav-item nav-link nav-hover navicoon">
              <a className="nav-link" href="#doctorlogin">
                <IconButton aria-label="delete">
                  <MedicationIcon />
                </IconButton>
                <span className="lettnav">Doctor Login</span>
              </a>
            </li>
            <li className="nav-item nav-link nav-hover navicoon">
              <a className="nav-link" href="#clubadminlogin">
                <IconButton aria-label="delete">
                  <ManageAccountsIcon />
                </IconButton>
                <span className="lettnav">Club Admin Login</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="containerthlogin neeeeeeee" id="loginhome">
          <div className="downarrroww">
            <IconButton aria-label="delete" className="dahover" href="#adminlogin">
              <ExpandCircleDownIcon sx={{ fontSize: "40px" }}/>
            </IconButton>
          </div>
        </div>
        <div className="containerthlogin" id="adminlogin">
          <div className="imggh">
            <img src={adminlogin} alt="Background" />
          </div>
          <div className="loginncardform">
            <Adminlogin />
          </div>
        </div>
        <div className="containerthlogin" id="inventorylogin">
          <div className="imggh">
            <img src={inventorylogin} alt="Background" />
          </div>
          <div className="loginncardform">
            <Inventorylogin />
          </div>
        </div>
        <div className="containerthlogin" id="doctorlogin">
          <div className="imggh">
            <img src={doctorlogin} alt="Background" />
          </div>
          <div className="loginncardform">
            <Doctorlogin />
          </div>
        </div>
        <div className="containerthlogin" id="clubadminlogin">
          <div className="imggh">
            <img src={clubadminlogin} alt="Background" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealerZ;
