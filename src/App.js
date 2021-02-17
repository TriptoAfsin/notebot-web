import React from 'react'

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./components/layout/Navbar";
import About from './components/pages/About';
import FrontPage from './components/pages/FrontPage';

import Notes from './components/sections/notes/Notes'
import Routines from './components/sections/routines/Routines'
import Results from './components/sections/results/Results'
import Syllabus from './components/sections/syllabus/Syllabus'
import Reports from './components/sections/lab_report/Reports'
import Level1Section from './components/sections/notes/level_1/Level1Section';
import Level2Section from './components/sections/notes/level_2/Level2Section';
import Level3Section from './components/sections/notes/level_3/Level3Section';
import Level4Section from './components/sections/notes/level_4/Level4Section';
import Footer from './components/layout/Footer';
import Math1Note from './components/sections/notes/level_1/level_1_subjects/math1/Math1Note';
import BCE1Note from './components/sections/notes/level_1/level_1_subjects/bce/Bce1Note';
import Math2Note from './components/sections/notes/level_1/level_1_subjects/math2/Math2Note';
import Chem1Note from './components/sections/notes/level_1/level_1_subjects/che1/Chem1Note';
import Chem2Note from './components/sections/notes/level_1/level_1_subjects/che2/Chem2Note';
import Phy1Note from './components/sections/notes/level_1/level_1_subjects/phy1/Phy1Notes';
import Phy2Note from './components/sections/notes/level_1/level_1_subjects/phy2/Phy2Notes';
import PseNotes from './components/sections/notes/level_1/level_1_subjects/pse/PseNotes';
import CpNotes from './components/sections/notes/level_1/level_1_subjects/cp/CpNotes';
import EmNotes from './components/sections/notes/level_1/level_1_subjects/em/EmNote';
import NtfNotes from './components/sections/notes/level_1/level_1_subjects/ntf/NtfNotes';
import FmgNotes from './components/sections/notes/level_1/level_1_subjects/fmg/FmgNotes';
import BfsNotes from './components/sections/notes/level_1/level_1_subjects/bfs/BfsNotes';
import TpmNotes from './components/sections/notes/level_1/level_1_subjects/tpm/TpmNotes';
import TmmNotes from './components/sections/notes/level_1/level_1_subjects/tmm/TmmNotes';
import IaeNotes from './components/sections/notes/level_1/level_1_subjects/iae/IaeNotes';
import IeeNotes from './components/sections/notes/level_1/level_1_subjects/iee/IeeNotes';
import EcbNotes from './components/sections/notes/level_1/level_1_subjects/ecb/EcbNotes';
import Am1Notes from './components/sections/notes/level_2/level_2_subjects/am1/Am1Notes';
import Ap1Notes from './components/sections/notes/level_2/level_2_subjects/ap1/Ap1Notes';
import CtcaNotes from './components/sections/notes/level_2/level_2_subjects/ctca/CtcaNotes';
import EeeNotes from './components/sections/notes/level_2/level_2_subjects/eee/EeeNotes';
import Fm1Notes from './components/sections/notes/level_2/level_2_subjects/fm1/Fm1Notes';
import FmeNotes from './components/sections/notes/level_2/level_2_subjects/fme/FmeNotes';
import MarketingNotes from './components/sections/notes/level_2/level_2_subjects/marketing/MarketingNotes';
import StatNotes from './components/sections/notes/level_2/level_2_subjects/stat/StatNotes';
import MmtfNotes from './components/sections/notes/level_2/level_2_subjects/mmtf/MmtfNotes';
import TpNotes from './components/sections/notes/level_2/level_2_subjects/tp/TpNotes';
import TtqcNotes from './components/sections/notes/level_2/level_2_subjects/ttqc/TtqcNotes';
import Wp1Notes from './components/sections/notes/level_2/level_2_subjects/wp1/Wp1Notes';
import Ym1Notes from './components/sections/notes/level_2/level_2_subjects/ym1/Ym1Notes';
import MpNotes from './components/sections/notes/level_2/level_2_subjects/mp/MpNotes';
import Fd2Notes from './components/sections/notes/level_2/level_2_subjects/fd2/Fd2Notes';
import FdceNotes from './components/sections/notes/level_2/level_2_subjects/fdce/FdceNotes';
import FytNotes from './components/sections/notes/level_2/level_2_subjects/fyt/FytNotes';
import WppNotes from './components/sections/notes/level_2/level_2_subjects/wpp/WppNotes';
import Sss1Notes from './components/sections/notes/level_2/level_2_subjects/sss1/Sss1Notes';
import Sss2Notes from './components/sections/notes/level_2/level_2_subjects/sss2/Sss2Notes';
import WeavPrepNotes from './components/sections/notes/level_2/level_2_subjects/weva_prep/WeavPrepNotes';
import AceNotes from './components/sections/notes/level_3/level_3_subjects/ace/AceNotes';
import AcmNotes from './components/sections/notes/level_3/level_3_subjects/acm/AcmNotes';
import Am2Notes from './components/sections/notes/level_3/level_3_subjects/am2/Am2Notes';
import Ap2Notes from './components/sections/notes/level_3/level_3_subjects/ap2/Ap2Notes';
import Wp2Notes from './components/sections/notes/level_3/level_3_subjects/wp2/Wp2Notes';
import EconoNotes from './components/sections/notes/level_3/level_3_subjects/economics/EconoNotes';
import Fm2Notes from './components/sections/notes/level_3/level_3_subjects/fm2/Fm2Notes';
import FsdNotes from './components/sections/notes/level_3/level_3_subjects/fsd/FsdNotes';
import PdNotes from './components/sections/notes/level_3/level_3_subjects/pd/PdNotes';
import Ym2Notes from './components/sections/notes/level_3/level_3_subjects/ym2/Ym2Notes';
import TqmNotes from './components/sections/notes/level_3/level_3_subjects/tqm/TqmNotes';
import TcpNotes from './components/sections/notes/level_3/level_3_subjects/tcp/TcpNotes';
import Knit1Notes from './components/sections/notes/level_3/level_3_subjects/knitting1/Knit1Notes';
import ImNotes from './components/sections/notes/level_3/level_3_subjects/im/ImNotes';
import LssNotes from './components/sections/notes/level_3/level_3_subjects/lss/LssNotes';
import MicNotes from './components/sections/notes/level_3/level_3_subjects/mic/MicNotes';
import PcsNotes from './components/sections/notes/level_3/level_3_subjects/pcs/PcsNotes';

import BilNotes from './components/sections/notes/level_4/level_4_subjects/bil/BilNotes';
import BsNotes from './components/sections/notes/level_4/level_4_subjects/bs/BsNotes';
import EpdNotes from './components/sections/notes/level_4/level_4_subjects/epd/EpdNotes';
import PpcNotes from './components/sections/notes/level_4/level_4_subjects/ppc/PpcNote';
import IRNotes from './components/sections/notes/level_4/level_4_subjects/ir/IrNotes';
import HrmNotes from './components/sections/notes/level_4/level_4_subjects/hrm/HrmNotes';
import TamNotes from './components/sections/notes/level_4/level_4_subjects/tam/TamNotes';
import Contact from './components/pages/Contact';
import Apps from './components/pages/Apps';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
     <Switch>
        <Route path='/' exact component={FrontPage}></Route>
        <Route path='/notes' exact component={Notes}></Route>
        <Route path='/notes/level1' exact component={Level1Section}></Route>

        <Route path='/notes/level1/math1' exact component={Math1Note}></Route>
        <Route path='/notes/level1/math2' exact component={Math2Note}></Route>
        <Route path='/notes/level1/bce' exact component={BCE1Note}></Route>
        <Route path='/notes/level1/chem1' exact component={Chem1Note}></Route>
        <Route path='/notes/level1/chem2' exact component={Chem2Note}></Route>
        <Route path='/notes/level1/phy1' exact component={Phy1Note}></Route>
        <Route path='/notes/level1/phy2' exact component={Phy2Note}></Route>
        <Route path='/notes/level1/pse' exact component={PseNotes}></Route>
        <Route path='/notes/level1/cp' exact component={CpNotes}></Route>
        <Route path='/notes/level1/em' exact component={EmNotes}></Route>
        <Route path='/notes/level1/ntf' exact component={NtfNotes}></Route>
        <Route path='/notes/level1/fmg' exact component={FmgNotes}></Route>
        <Route path='/notes/level1/bfs' exact component={BfsNotes}></Route>
        <Route path='/notes/level1/tpm' exact component={TpmNotes}></Route>
        <Route path='/notes/level1/tmm' exact component={TmmNotes}></Route>
        <Route path='/notes/level1/iae' exact component={IaeNotes}></Route>
        <Route path='/notes/level1/iee' exact component={IeeNotes}></Route>
        <Route path='/notes/level1/ecb' exact component={EcbNotes}></Route>

        <Route path='/notes/level2/am1' exact component={Am1Notes}></Route>
        <Route path='/notes/level2/ap1' exact component={Ap1Notes}></Route>
        <Route path='/notes/level2/ctca' exact component={CtcaNotes}></Route>
        <Route path='/notes/level2/eee' exact component={EeeNotes}></Route>
        <Route path='/notes/level2/fm1' exact component={Fm1Notes}></Route>
        <Route path='/notes/level2/fme' exact component={FmeNotes}></Route>
        <Route path='/notes/level2/marketing' exact component={MarketingNotes}></Route>
        <Route path='/notes/level2/stat' exact component={StatNotes}></Route>
        <Route path='/notes/level2/mmtf' exact component={MmtfNotes}></Route>
        <Route path='/notes/level2/tp' exact component={TpNotes}></Route>
        <Route path='/notes/level2/ttqc' exact component={TtqcNotes}></Route>
        <Route path='/notes/level2/wp1' exact component={Wp1Notes}></Route>
        <Route path='/notes/level2/ym1' exact component={Ym1Notes}></Route>
        <Route path='/notes/level2/mp' exact component={MpNotes}></Route>
        <Route path='/notes/level2/fd2' exact component={Fd2Notes}></Route>
        <Route path='/notes/level2/fdce' exact component={FdceNotes}></Route>
        <Route path='/notes/level2/fyt' exact component={FytNotes}></Route>
        <Route path='/notes/level2/wpp' exact component={WppNotes}></Route>
        <Route path='/notes/level2/sss1' exact component={Sss1Notes}></Route>
        <Route path='/notes/level2/sss2' exact component={Sss2Notes}></Route>
        <Route path='/notes/level2/wev_prep' exact component={WeavPrepNotes}></Route>

        <Route path='/notes/level3/ace' exact component={AceNotes}></Route>
        <Route path='/notes/level3/acm' exact component={AcmNotes}></Route>
        <Route path='/notes/level3/am2' exact component={Am2Notes}></Route>
        <Route path='/notes/level3/ap2' exact component={Ap2Notes}></Route>
        <Route path='/notes/level3/wp2' exact component={Wp2Notes}></Route>
        <Route path='/notes/level3/economics' exact component={EconoNotes}></Route>
        <Route path='/notes/level3/fm2' exact component={Fm2Notes}></Route>
        <Route path='/notes/level3/fsd' exact component={FsdNotes}></Route>
        <Route path='/notes/level3/pd' exact component={PdNotes}></Route>
        <Route path='/notes/level3/ym2' exact component={Ym2Notes}></Route>
        <Route path='/notes/level3/tqm' exact component={TqmNotes}></Route>
        <Route path='/notes/level3/tcp' exact component={TcpNotes}></Route>
        <Route path='/notes/level3/knit1' exact component={Knit1Notes}></Route>
        <Route path='/notes/level3/im' exact component={ImNotes}></Route>
        <Route path='/notes/level3/lss' exact component={LssNotes}></Route>
        <Route path='/notes/level3/mic' exact component={MicNotes}></Route>
        <Route path='/notes/level3/pcs' exact component={PcsNotes}></Route>

        <Route path='/notes/level4/bil' exact component={BilNotes}></Route>
        <Route path='/notes/level4/bs' exact component={BsNotes}></Route>
        <Route path='/notes/level4/epd' exact component={EpdNotes}></Route>
        <Route path='/notes/level4/ppc' exact component={PpcNotes}></Route>
        <Route path='/notes/level4/ir' exact component={IRNotes}></Route>
        <Route path='/notes/level4/hrm' exact component={HrmNotes}></Route>
        <Route path='/notes/level4/tam' exact component={TamNotes}></Route>
        

        <Route path='/notes/level2' exact component={Level2Section}></Route>
        <Route path='/notes/level3' exact component={Level3Section}></Route>
        <Route path='/notes/level4' exact component={Level4Section}></Route>
        <Route path='/routines' exact component={Routines}></Route>
        <Route path='/results' exact component={Results}></Route>
        <Route path='/syllabus' exact component={Syllabus}></Route>
        <Route path='/reports' exact component={Reports}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/apps' exact component={Apps}></Route>
        <Route path='/contact' exact component={Contact}></Route>
     </Switch>
    </Router>
  );
}

export default App;
