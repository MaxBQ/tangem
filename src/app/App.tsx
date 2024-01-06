import './styles/index.scss';
import { BannerWatcher } from '@/widgets/BannerWatcher';
import { Routes } from '@/app/providers/Routes';

function App() {
  return (
    <div className="app">
      <BannerWatcher children={<Routes />} />
    </div>
  );
}

export default App;
