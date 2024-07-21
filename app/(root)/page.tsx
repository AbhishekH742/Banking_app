import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const  Home = async () => {
  const loggedIn = await getLoggedInUser();


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your Account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1200.9}
          />
        </header>
        Recent trans
      </div>

      <RightSidebar
        user={loggedIn}
        transaction={[]}
        banks={[{ currentBalance: 200.0 }, { currentBalance: 350.89 }]}
      />
    </section>
  );
}

export default Home;
