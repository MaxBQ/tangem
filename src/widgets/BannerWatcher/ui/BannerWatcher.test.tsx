import { BannerWatcher } from './BannerWatcher';
import { render, screen } from '@/shared/config/tests/CustomRender.tsx';

describe('Banner', () => {
  beforeEach(() => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  test('bannerTop', () => {
    render(<BannerWatcher />);
    expect(screen.getByTestId('banner_top')).toBeInTheDocument();
  });
});
