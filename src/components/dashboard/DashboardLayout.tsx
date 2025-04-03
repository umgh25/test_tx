import { FC, ReactNode } from "react";
import Sidebar from "./Sidebar";

/**
 * Props du composant DashboardLayout.
 * @interface DashboardLayoutProps
 * @property {ReactNode} children - Les éléments enfants à rendre à l'intérieur du layout.
 */
interface DashboardLayoutProps {
  children: ReactNode;
}

/**
 * Composant de mise en page pour le tableau de bord.
 * Il affiche un layout avec un sidebar et une section principale qui contient les enfants passés en props.
 *
 * @component
 * @example
 * // Exemple d'utilisation
 * <DashboardLayout>
 *   <SomeContent />
 * </DashboardLayout>
 *
 * @param {DashboardLayoutProps} props - Les propriétés du composant.
 * @param {ReactNode} props.children - Les enfants à afficher dans la section principale.
 * @returns {JSX.Element} Le layout du tableau de bord avec le sidebar et le contenu principal.
 */
const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6" role="main">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
