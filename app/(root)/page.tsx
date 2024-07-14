import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function Home() {
  const loggedIn = {
    firstName: "Abhishek",
    lastName: "Hallur",
    email: "abhishekhallur742@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
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
