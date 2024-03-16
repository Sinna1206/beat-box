import { render } from '@testing-library/react';
import Status from './Status';

describe('Status Component', () => {
  it('displays the status message correctly', () => {
    const { getByText } = render(<Status statusMessage="Playing: Test Song" />);
    expect(getByText('Playing: Test Song')).toBeInTheDocument();
  });

});
