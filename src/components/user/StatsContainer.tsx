import StatsCard from "./StatsCard";

type StatesContainerProps = {
  totalRepos: number;
  followers: number;
  following: number;
  gists: number;
};

function StatsContainer(props: StatesContainerProps) {
  const { totalRepos, followers, following, gists } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
      <StatsCard title="Total Repositories" count={totalRepos} />
      <StatsCard title="Followers" count={followers} />
      <StatsCard title="Following" count={following} />
      <StatsCard title="Gists" count={gists} />
    </div>
  );
}

export default StatsContainer;
