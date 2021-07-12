import React from "react";
import Link from "next/link";

import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import DashboardIcon from "@material-ui/icons/Dashboard";

import styles from "./index.module.scss";

export const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.body}>
        <Link href="/block-explorer">
          <div className={styles.item}>
            <AccountBalanceWalletIcon />
            <span className={styles.label}>Block Explorer</span>
          </div>
        </Link>
        <Link href="/network-monitor">
          <div className={styles.item}>
            <CreditCardIcon />
            <span className={styles.label}>Network Monitor</span>
          </div>
        </Link>
        <Link href="/analytics">
          <div className={styles.item}>
            <DashboardIcon />
            <span className={styles.label}>Analytics</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
