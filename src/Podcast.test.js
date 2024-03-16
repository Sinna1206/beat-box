import { render } from '@testing-library/react';
import Podcast from './Podcast';

describe('Podcast Component', () => {
  it('handles missing season gracefully', () => {
    // Example podcast data with no season
    const podcastWithoutSeason = {
      episodeTitle: "Example Title",
      episode: 1
    };

    const { queryByText } = render(<Podcast {...podcastWithoutSeason} />);
    expect(queryByText(/Season:/i)).not.toBeInTheDocument();
    expect(queryByText(`Episode: ${podcastWithoutSeason.episode}`)).toBeInTheDocument();
  });

  it('handles missing episode gracefully', () => {
    // Example podcast data with no episode
    const podcastWithoutEpisode = {
      episodeTitle: "Example Title",
      season: 1
    };

    const { queryByText } = render(<Podcast {...podcastWithoutEpisode} />);
    expect(queryByText(/Episode:/i)).not.toBeInTheDocument();
    expect(queryByText(`Season: ${podcastWithoutEpisode.season}`)).toBeInTheDocument();
  });

  it('renders correctly when both season and episode are provided', () => {
    // Example podcast data with both season and episode
    const podcastWithBoth = {
      episodeTitle: "Example Title",
      season: 1,
      episode: 1
    };

    const { getByText } = render(<Podcast {...podcastWithBoth} />);
    expect(getByText(`Season: ${podcastWithBoth.season}`)).toBeInTheDocument();
    expect(getByText(`Episode: ${podcastWithBoth.episode}`)).toBeInTheDocument();
  });
});
