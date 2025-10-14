// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "Who Am I",
		status: "completed",
		rating: 9.5,
		cover: "/assets/anime/WhoAmI.webp",
		description: "社会工程学",
		episodes: "102 minutes",
		year: "2014",
		genre: ["惊悚", "悬疑"],
		studio: "",
		link: "https://www.bilibili.com/bangumi/play/ep337135?theme=movie&spm_id_from=333.337.0.0",
		progress: 12,
		totalEpisodes: 12,
		startDate: "",
		endDate: "",
	},
	{
		title: "Asteroid in Love",
		status: "watching",
		rating: 9.2,
		cover: "/assets/anime/laxxx.webp",
		description: "Meeting girls among the stars, pure love and healing",
		episodes: "12 episodes",
		year: "2020",
		genre: ["Romance", "Healing"],
		studio: "Doga Kobo",
		link: "https://www.bilibili.com/bangumi/media/md28224128",
		progress: 5,
		totalEpisodes: 12,
		startDate: "2020-01",
		endDate: "2020-03",
	},
];

export default localAnimeList;
