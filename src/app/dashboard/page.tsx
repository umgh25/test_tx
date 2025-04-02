"use client";

import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Header from "@/components/dashboard/Header";
import LoansTab from "@/components/dashboard/LoansTab";
import ProfileCard from "@/components/dashboard/ProfileCard";
import FinancialChart from "@/components/dashboard/FinancialChart";
import MarketRiskTable from "@/components/dashboard/MarketRiskTable";
import TransactionsSection from "@/components/dashboard/TransactionsSection";
import LoansTable from "@/components/dashboard/LoansTable";

// Définissez le type pour être cohérent avec l'interface LoanData dans LoansTable
type LoanStatus = "validé" | "en attente";

export default function Dashboard() {
  // Données pour le graphique financier
  const chartData = [
    { name: "1", greenLine: 10, yellowLine: 15, blueLine: 8 },
    { name: "5", greenLine: 12, yellowLine: 18, blueLine: 10 },
    { name: "10", greenLine: 14, yellowLine: 17, blueLine: 15 },
    { name: "15", greenLine: 18, yellowLine: 19, blueLine: 16 },
    { name: "20", greenLine: 24, yellowLine: 22, blueLine: 20 },
    { name: "25", greenLine: 45, yellowLine: 32, blueLine: 30 },
  ];

  // Données pour le tableau des risques de marché
  const riskData = [
    {
      period: "7 DAYS",
      euribor: "Euribor1m",
      tenor: "7 DAYS",
      marketPlaceRate: "0.0000",
      marketRiskFreeRate: "0",
      marketRiskFreeSpread: "0.0000",
      change: "0.0000",
      variation: "1",
    },
    {
      period: "30 DAYS",
      euribor: "Euribor1m",
      tenor: "30 DAYS",
      marketPlaceRate: "0.0000",
      marketRiskFreeRate: "0",
      marketRiskFreeSpread: "0.0000",
      change: "0.0000",
      variation: "1",
    },
    {
      period: "90 DAYS",
      euribor: "Euribor1m",
      tenor: "90 DAYS",
      marketPlaceRate: "0.02945",
      marketRiskFreeRate: "0.02945",
      marketRiskFreeSpread: "0.0000",
      change: "0.0000",
      variation: "0.02945",
    },
    {
      period: "180 DAYS",
      euribor: "Euribor1m",
      tenor: "180 DAYS",
      marketPlaceRate: "0.02945",
      marketRiskFreeRate: "0.02945",
      marketRiskFreeSpread: "0.0000",
      change: "0.0000",
      variation: "0.02945",
    },
    {
      period: "365 DAYS",
      euribor: "Euribor1m",
      tenor: "365 DAYS",
      marketPlaceRate: "0.02945",
      marketRiskFreeRate: "0.02945",
      marketRiskFreeSpread: "0.0000",
      change: "0.0000",
      variation: "0.02945",
    },
  ];

  // Données pour les prêts - mises à jour selon la nouvelle image
  const loansData = [
    {
      type: "Prêt Société",
      accountNumber: "13452789",
      borrowerIdentifier: "UK567UB",
      requestedAmount: "39 234€",
      loanAmount: "39 234€",
      monthlyPayment: "700€",
      durationMonths: "18 mois",
      interestRate: "3%",
      commission: "Lorem Ipsum",
      globalEffectiveRate: "3",
      requestDate: "01/11/2019",
      lastPaymentDate: "01/04/2022",
      status: "validé" as LoanStatus,
    },
    {
      type: "Prêt HotDoggs",
      accountNumber: "67547800",
      borrowerIdentifier: "UK567UB",
      requestedAmount: "12 300€",
      loanAmount: "En attente",
      monthlyPayment: "En attente",
      durationMonths: "14 mois",
      interestRate: "8%",
      commission: "Lorem Ipsum",
      globalEffectiveRate: "5",
      requestDate: "04/09/2021",
      lastPaymentDate: "En attente",
      status: "en attente" as LoanStatus,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <DashboardLayout>
        {/* Header */}
        <Header username="Paul" />

        {/* Onglets de navigation */}
        <LoansTab />

        {/* Contenu principal */}
        <div className="my-6">
          <h2 className="text-xl font-semibold mb-4">Mon compte</h2>

          <ProfileCard
            name="Paul Dumarin"
            address="54 rue du Louvre"
            city="PARIS 75001"
            segment="Segment"
            riskEvaluation={{
              label: "Risques faible",
              value: "B",
            }}
            score={{
              label: "Lorem Ipsum",
              value: "B",
              range: {
                min: "A",
                max: "C",
                current: 66,
              },
            }}
            lastTransaction="80K"
          />
        </div>

        {/* Graphiques et tableaux financiers */}
        <div className="my-6">
          <h2 className="text-xl font-semibold mb-4">
            Informations financières
          </h2>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-4 h-full">
              <FinancialChart data={chartData} />
            </div>
            <div className="col-span-8 h-full">
              <MarketRiskTable data={riskData} />
            </div>
          </div>
        </div>

        {/* Section Transactions */}
        <TransactionsSection />

        {/* Tableau des prêts */}
        <LoansTable data={loansData} />
      </DashboardLayout>
    </div>
  );
}
