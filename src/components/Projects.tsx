import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  ChevronLeftRounded,
  ChevronRightRounded,
  CloseRounded,
  CollectionsRounded,
  PlayArrowRounded,
} from "@mui/icons-material";

/* POSTS / CARROSSÉIS */
import post1_1 from "../assets/projects/trabalhos/1 (1).jpg";
import post1_2 from "../assets/projects/trabalhos/1 (2).jpg";
import post1_3 from "../assets/projects/trabalhos/1 (3).jpg";
import post1_4 from "../assets/projects/trabalhos/1 (4).jpg";
import post1_5 from "../assets/projects/trabalhos/1 (5).jpg";
import post1_6 from "../assets/projects/trabalhos/1 (6).jpg";
import post1_7 from "../assets/projects/trabalhos/1 (7).jpg";
import post1_8 from "../assets/projects/trabalhos/1 (8).jpg";

import post2_1 from "../assets/projects/trabalhos/2 (1).jpg";
import post2_2 from "../assets/projects/trabalhos/2 (2).jpg";
import post2_3 from "../assets/projects/trabalhos/2 (3).jpg";
import post2_4 from "../assets/projects/trabalhos/2 (4).jpg";
import post2_5 from "../assets/projects/trabalhos/2 (5).jpg";
import post2_6 from "../assets/projects/trabalhos/2 (6).jpg";
import post2_7 from "../assets/projects/trabalhos/2 (7).jpg";
import post2_8 from "../assets/projects/trabalhos/2 (8).jpg";

import post3_1 from "../assets/projects/trabalhos/3 (1).jpg";
import post3_2 from "../assets/projects/trabalhos/3 (2).jpg";
import post3_3 from "../assets/projects/trabalhos/3 (3).jpg";
import post3_4 from "../assets/projects/trabalhos/3 (4).jpg";
import post3_5 from "../assets/projects/trabalhos/3 (5).jpg";
import post3_6 from "../assets/projects/trabalhos/3 (6).jpg";

import post4_1 from "../assets/projects/trabalhos/4 (1).jpg";
import post4_2 from "../assets/projects/trabalhos/4 (2).jpg";
import post4_3 from "../assets/projects/trabalhos/4 (3).jpg";
import post4_4 from "../assets/projects/trabalhos/4 (4).jpg";
import post4_5 from "../assets/projects/trabalhos/4 (5).jpg";
import post4_6 from "../assets/projects/trabalhos/4 (6).jpg";

import post5_1 from "../assets/projects/trabalhos/5 (1).jpg";
import post5_2 from "../assets/projects/trabalhos/5 (2).jpg";
import post5_3 from "../assets/projects/trabalhos/5 (3).jpg";
import post5_4 from "../assets/projects/trabalhos/5 (4).jpg";
import post5_5 from "../assets/projects/trabalhos/5 (5).jpg";
import post5_6 from "../assets/projects/trabalhos/5 (6).jpg";

import post6_1 from "../assets/projects/trabalhos/6 (1).jpg";
import post6_2 from "../assets/projects/trabalhos/6 (2).jpg";
import post6_3 from "../assets/projects/trabalhos/6 (3).jpg";
import post6_4 from "../assets/projects/trabalhos/6 (4).jpg";
import post6_5 from "../assets/projects/trabalhos/6 (5).jpg";
import post6_6 from "../assets/projects/trabalhos/6 (6).jpg";

import post7_1 from "../assets/projects/trabalhos/7 (1).jpg";
import post7_2 from "../assets/projects/trabalhos/7 (2).jpg";
import post7_3 from "../assets/projects/trabalhos/7 (3).jpg";
import post7_4 from "../assets/projects/trabalhos/7 (4).jpg";
import post7_5 from "../assets/projects/trabalhos/7 (5).jpg";

import post8_1 from "../assets/projects/trabalhos/8 (1).jpg";
import post8_2 from "../assets/projects/trabalhos/8 (2).jpg";
import post8_3 from "../assets/projects/trabalhos/8 (3).jpg";
import post8_4 from "../assets/projects/trabalhos/8 (4).jpg";
import post8_5 from "../assets/projects/trabalhos/8 (5).jpg";
import post8_6 from "../assets/projects/trabalhos/8 (6).jpg";
import post8_7 from "../assets/projects/trabalhos/8 (7).jpg";
import post8_8 from "../assets/projects/trabalhos/8 (8).jpg";

import post9_1 from "../assets/projects/trabalhos/9 (1).jpg";
import post9_2 from "../assets/projects/trabalhos/9 (2).jpg";
import post9_3 from "../assets/projects/trabalhos/9 (3).jpg";
import post9_4 from "../assets/projects/trabalhos/9 (4).jpg";
import post9_5 from "../assets/projects/trabalhos/9 (5).jpg";
import post9_6 from "../assets/projects/trabalhos/9 (6).jpg";
import post9_7 from "../assets/projects/trabalhos/9 (7).jpg";
import post9_8 from "../assets/projects/trabalhos/9 (8).jpg";

import post10_1 from "../assets/projects/trabalhos/10 (1).jpg";
import post10_2 from "../assets/projects/trabalhos/10 (2).jpg";
import post10_3 from "../assets/projects/trabalhos/10 (3).jpg";
import post10_4 from "../assets/projects/trabalhos/10 (4).jpg";
import post10_5 from "../assets/projects/trabalhos/10 (5).jpg";

import post11_1 from "../assets/projects/trabalhos/11 (1).png";
import post11_2 from "../assets/projects/trabalhos/11 (2).png";
import post11_3 from "../assets/projects/trabalhos/11 (3).png";
import post11_4 from "../assets/projects/trabalhos/11 (4).png";
import post11_5 from "../assets/projects/trabalhos/11 (5).png";
import post11_6 from "../assets/projects/trabalhos/11 (6).png";
import post11_7 from "../assets/projects/trabalhos/11 (7).png";

/* STORIES */
import story1 from "../assets/projects/storys/1.png";
import story2_1 from "../assets/projects/storys/2 (1).jpg";
import story2_2 from "../assets/projects/storys/2 (2).jpg";
import story2_3 from "../assets/projects/storys/2 (3).jpg";
import story2_4 from "../assets/projects/storys/2 (4).jpg";
import story2_5 from "../assets/projects/storys/2 (5).jpg";
import story2_6 from "../assets/projects/storys/2 (6).jpg";
import story2_7 from "../assets/projects/storys/2 (7).jpg";
import story3 from "../assets/projects/storys/3.png";
import story4 from "../assets/projects/storys/4.png";
import story5 from "../assets/projects/storys/5.png";
import story6 from "../assets/projects/storys/6.png";
import story7 from "../assets/projects/storys/7.png";
import story8 from "../assets/projects/storys/8.png";

/* REELS / TIKTOK */
import video1Cover from "../assets/projects/videos/capa v1.jpg";
import video2Cover from "../assets/projects/videos/capa v2.png";
import video3Cover from "../assets/projects/videos/capa v3.png";
import video4Cover from "../assets/projects/videos/capa v4.png";
import video5Cover from "../assets/projects/videos/capa v5.png";
import video1 from "../assets/projects/videos/v1.mp4";
import video2 from "../assets/projects/videos/v2.mp4";
import video3 from "../assets/projects/videos/v3.mp4";
import video4 from "../assets/projects/videos/v4.mp4";
import video5 from "../assets/projects/videos/v5.mp4";

/* MOTION */
import motion1 from "../assets/projects/motion/1.mp4";
import motion2_1 from "../assets/projects/motion/2 (1).mp4";
import motion2_2 from "../assets/projects/motion/2 (2).mp4";
import motion2_3 from "../assets/projects/motion/2 (3).mp4";
import motion2_4 from "../assets/projects/motion/2 (4).mp4";
import motion2_5 from "../assets/projects/motion/2 (5).mp4";
import motion2_6 from "../assets/projects/motion/2 (6).mp4";
import motionCover1 from "../assets/projects/motion/covers/1.jpg";
import motionCover2_1 from "../assets/projects/motion/covers/2__1_.jpg";
import motionCover2_2 from "../assets/projects/motion/covers/2__2_.jpg";
import motionCover2_3 from "../assets/projects/motion/covers/2__3_.jpg";
import motionCover2_4 from "../assets/projects/motion/covers/2__4_.jpg";
import motionCover2_5 from "../assets/projects/motion/covers/2__5_.jpg";
import motionCover2_6 from "../assets/projects/motion/covers/2__6_.jpg";

type PostProject = {
  id: number;
  title: string;
  images: string[];
};

type VideoFormat = "vertical" | "portrait" | "horizontal";

type VideoProject = {
  id: string;
  title: string;
  source: string;
  cover?: string;
  category: string;
  format: VideoFormat;
};

type MotionCarouselProject = {
  id: string;
  title: string;
  category: string;
  format: VideoFormat;
  videos: VideoProject[];
};

type StoryProject = {
  id: number;
  title: string;
  images: string[];
};

const postProjects: PostProject[] = [
  { id: 1, title: "Carrossel 01", images: [post1_1, post1_2, post1_3, post1_4, post1_5, post1_6, post1_7, post1_8] },
  { id: 2, title: "Carrossel 02", images: [post2_1, post2_2, post2_3, post2_4, post2_5, post2_6, post2_7, post2_8] },
  { id: 3, title: "Carrossel 03", images: [post3_1, post3_2, post3_3, post3_4, post3_5, post3_6] },
  { id: 4, title: "Carrossel 04", images: [post4_1, post4_2, post4_3, post4_4, post4_5, post4_6] },
  { id: 5, title: "Carrossel 05", images: [post5_1, post5_2, post5_3, post5_4, post5_5, post5_6] },
  { id: 6, title: "Carrossel 06", images: [post6_1, post6_2, post6_3, post6_4, post6_5, post6_6] },
  { id: 7, title: "Carrossel 07", images: [post7_1, post7_2, post7_3, post7_4, post7_5] },
  { id: 8, title: "Carrossel 08", images: [post8_1, post8_2, post8_3, post8_4, post8_5, post8_6, post8_7, post8_8] },
  { id: 9, title: "Carrossel 09", images: [post9_1, post9_2, post9_3, post9_4, post9_5, post9_6, post9_7, post9_8] },
  { id: 10, title: "Carrossel 10", images: [post10_1, post10_2, post10_3, post10_4, post10_5] },
  { id: 11, title: "Carrossel 11", images: [post11_1, post11_2, post11_3, post11_4, post11_5, post11_6, post11_7] },
];

const videoProjects: VideoProject[] = [
  { id: "reel-1", title: "Reel / TikTok 01", source: video1, cover: video1Cover, category: "Reels / TikTok", format: "vertical" },
  { id: "reel-2", title: "Reel / TikTok 02", source: video2, cover: video2Cover, category: "Reels / TikTok", format: "vertical" },
  { id: "reel-3", title: "Reel / TikTok 03", source: video3, cover: video3Cover, category: "Reels / TikTok", format: "vertical" },
  { id: "reel-4", title: "Reel / TikTok 04", source: video4, cover: video4Cover, category: "Reels / TikTok", format: "vertical" },
  { id: "reel-5", title: "Reel / TikTok 05", source: video5, cover: video5Cover, category: "Reels / TikTok", format: "vertical" },
];

const motionProjects: VideoProject[] = [
  { id: "motion-1", title: "Motion 01", source: motion1, cover: motionCover1, category: "Motion Design", format: "vertical" },
];

const motionCarouselProjects: MotionCarouselProject[] = [
  {
    id: "motion-carousel-2",
    title: "Motion 02",
    category: "Motion Design",
    format: "portrait",
    videos: [
      { id: "motion-2-6", title: "Motion 02 • 01", source: motion2_6, cover: motionCover2_6, category: "Motion Design", format: "portrait" },
      { id: "motion-2-1", title: "Motion 02 • 02", source: motion2_1, cover: motionCover2_1, category: "Motion Design", format: "portrait" },
      { id: "motion-2-2", title: "Motion 02 • 03", source: motion2_2, cover: motionCover2_2, category: "Motion Design", format: "portrait" },
      { id: "motion-2-3", title: "Motion 02 • 04", source: motion2_3, cover: motionCover2_3, category: "Motion Design", format: "portrait" },
      { id: "motion-2-4", title: "Motion 02 • 05", source: motion2_4, cover: motionCover2_4, category: "Motion Design", format: "portrait" },
      { id: "motion-2-5", title: "Motion 02 • 06", source: motion2_5, cover: motionCover2_5, category: "Motion Design", format: "portrait" },
    ],
  },
];

const storyProjects: StoryProject[] = [
  { id: 1, title: "Story 01", images: [story1] },
  { id: 2, title: "Story 02", images: [story2_1, story2_2, story2_3, story2_4, story2_5, story2_6, story2_7] },
  { id: 3, title: "Story 03", images: [story3] },
  { id: 4, title: "Story 04", images: [story4] },
  { id: 5, title: "Story 05", images: [story5] },
  { id: 6, title: "Story 06", images: [story6] },
  { id: 7, title: "Story 07", images: [story7] },
  { id: 8, title: "Story 08", images: [story8] },
];

type RailName = "posts" | "videos" | "stories" | "motion";

type RailFadeState = Record<RailName, { left: boolean; right: boolean }>;

const Projects: React.FC = () => {
  const postsRailRef = useRef<HTMLDivElement>(null);
  const videosRailRef = useRef<HTMLDivElement>(null);
  const storiesRailRef = useRef<HTMLDivElement>(null);
  const motionRailRef = useRef<HTMLDivElement>(null);

  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
    rail: null as HTMLDivElement | null,
  });

  const suppressNextClickRef = useRef(false);

  const [selectedPost, setSelectedPost] = useState<PostProject | null>(null);
  const [selectedPostIndex, setSelectedPostIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [selectedMotionCarousel, setSelectedMotionCarousel] = useState<MotionCarouselProject | null>(null);
  const [selectedMotionIndex, setSelectedMotionIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState<StoryProject | null>(null);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);

  const [railFades, setRailFades] = useState<RailFadeState>({
    posts: { left: false, right: false },
    videos: { left: false, right: false },
    stories: { left: false, right: false },
    motion: { left: false, right: false },
  });

  const updateRailFades = useCallback((name: RailName, rail: HTMLDivElement | null) => {
    if (!rail) return;

    const maxScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const hasOverflow = maxScrollLeft > 4;
    const next = {
      left: hasOverflow && rail.scrollLeft > 4,
      right: hasOverflow && rail.scrollLeft < maxScrollLeft - 4,
    };

    setRailFades((current) => {
      const previous = current[name];
      if (previous.left === next.left && previous.right === next.right) return current;
      return { ...current, [name]: next };
    });
  }, []);

  useEffect(() => {
    const rails: Array<[RailName, HTMLDivElement | null]> = [
      ["posts", postsRailRef.current],
      ["videos", videosRailRef.current],
      ["stories", storiesRailRef.current],
      ["motion", motionRailRef.current],
    ];

    const refresh = () => rails.forEach(([name, rail]) => updateRailFades(name, rail));
    const frame = window.requestAnimationFrame(refresh);
    const observer = new ResizeObserver(refresh);

    rails.forEach(([, rail]) => {
      if (rail) observer.observe(rail);
    });

    window.addEventListener("resize", refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", refresh);
      window.removeEventListener("load", refresh);
    };
  }, [updateRailFades]);

  const handleRailPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const rail = event.currentTarget;
    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: rail.scrollLeft,
      moved: false,
      rail,
    };
    rail.classList.add("is-dragging");
  };

  const handleRailPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;

    if (event.pointerType !== "mouse" || !dragState.isDragging || dragState.rail !== event.currentTarget) return;

    const distance = event.clientX - dragState.startX;

    if (Math.abs(distance) > 8) dragState.moved = true;

    if (dragState.moved) {
      event.preventDefault();
      event.currentTarget.scrollLeft = dragState.scrollLeft - distance;
    }
  };

  const finishRailDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;
    const rail = event.currentTarget;

    if (event.pointerType !== "mouse" || !dragState.isDragging || dragState.rail !== rail) return;

    suppressNextClickRef.current = dragState.moved;
    dragState.isDragging = false;
    rail.classList.remove("is-dragging");

    window.setTimeout(() => {
      suppressNextClickRef.current = false;
      dragStateRef.current.moved = false;
      dragStateRef.current.rail = null;
    }, 0);
  };

  const handleCardClick = (action: () => void) => {
    if (suppressNextClickRef.current || dragStateRef.current.moved) return;
    action();
  };

  const scrollRail = (rail: HTMLDivElement | null, direction: "left" | "right") => {
    if (!rail) return;

    rail.scrollBy({
      left: direction === "left" ? -rail.clientWidth * 0.78 : rail.clientWidth * 0.78,
      behavior: "smooth",
    });
  };

  const closeModal = () => {
    setSelectedPost(null);
    setSelectedVideo(null);
    setSelectedMotionCarousel(null);
    setSelectedMotionIndex(0);
    setSelectedStory(null);
    setSelectedPostIndex(0);
    setSelectedStoryIndex(0);
  };

  const changePostImage = useCallback((direction: "previous" | "next") => {
    if (!selectedPost) return;
    const total = selectedPost.images.length;
    setSelectedPostIndex((current) => direction === "next" ? (current + 1) % total : (current - 1 + total) % total);
  }, [selectedPost]);

  const changeMotionVideo = useCallback((direction: "previous" | "next") => {
    if (!selectedMotionCarousel) return;
    const total = selectedMotionCarousel.videos.length;
    setSelectedMotionIndex((current) =>
      direction === "next" ? (current + 1) % total : (current - 1 + total) % total
    );
  }, [selectedMotionCarousel]);

  const changeStoryImage = useCallback((direction: "previous" | "next") => {
    if (!selectedStory) return;
    const total = selectedStory.images.length;
    setSelectedStoryIndex((current) => direction === "next" ? (current + 1) % total : (current - 1 + total) % total);
  }, [selectedStory]);

  useEffect(() => {
    const modalOpen = Boolean(selectedPost || selectedVideo || selectedStory);
    document.body.style.overflow = modalOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!modalOpen) return;
      if (event.key === "Escape") closeModal();

      if (selectedPost) {
        if (event.key === "ArrowRight") changePostImage("next");
        if (event.key === "ArrowLeft") changePostImage("previous");
      }

      if (selectedStory && selectedStory.images.length > 1) {
        if (event.key === "ArrowRight") changeStoryImage("next");
        if (event.key === "ArrowLeft") changeStoryImage("previous");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPost, selectedVideo, selectedMotionCarousel, selectedStory, changePostImage, changeStoryImage]);

  const railInteractionProps = {
    onPointerDown: handleRailPointerDown,
    onPointerMove: handleRailPointerMove,
    onPointerUp: finishRailDrag,
    onPointerCancel: finishRailDrag,
  };

  const renderFade = (name: RailName, side: "left" | "right") => (
    <span
      className={`portfolio-projects-fade portfolio-projects-fade-${side} ${railFades[name][side] ? "is-visible" : ""}`}
      aria-hidden="true"
    />
  );

  return (
    <section id="projetos" className="portfolio-projects-section">
      <div className="portfolio-projects-heading">
        <span className="section-pill reveal">Projetos</span>
        <h2 className="reveal">
          Trabalhos que transformam ideias em
          <span className="gradient-text"> comunicação visual.</span>
        </h2>
      </div>

      <div className="portfolio-projects-catalog">
        <div className="portfolio-projects-row-header">
          <div><small>Social media</small><h3>Posts e carrosséis</h3></div>
          <div className="portfolio-projects-controls">
            <button type="button" onClick={() => scrollRail(postsRailRef.current, "left")} aria-label="Ver trabalhos anteriores"><ChevronLeftRounded /></button>
            <button type="button" onClick={() => scrollRail(postsRailRef.current, "right")} aria-label="Ver próximos trabalhos"><ChevronRightRounded /></button>
          </div>
        </div>

        <div className="portfolio-projects-rail-wrapper">
          <div ref={postsRailRef} className="portfolio-projects-rail" onScroll={(event) => updateRailFades("posts", event.currentTarget)} {...railInteractionProps}>
            {postProjects.map((project) => (
              <button
                type="button"
                className="portfolio-project-card project-carousel-card"
                key={project.id}
                onClick={() => handleCardClick(() => {
                  setSelectedPost(project);
                  setSelectedPostIndex(0);
                })}
              >
                <img src={project.images[0]} alt={`Capa de ${project.title}`} loading="lazy" draggable={false} />
                <span className="project-pages-badge"><CollectionsRounded />{project.images.length} páginas</span>
                <span className="portfolio-project-overlay">
                  <span><small>Carrossel</small><strong>{project.title}</strong></span>
                  <span className="portfolio-project-expand"><CollectionsRounded /></span>
                </span>
              </button>
            ))}
          </div>
          {renderFade("posts", "left")}
          {renderFade("posts", "right")}
        </div>
      </div>

      <div className="portfolio-projects-catalog">
        <div className="portfolio-projects-row-header">
          <div><small>Conteúdo vertical</small><h3>Reels e TikTok</h3></div>
          <div className="portfolio-projects-controls">
            <button type="button" onClick={() => scrollRail(videosRailRef.current, "left")} aria-label="Ver vídeos anteriores"><ChevronLeftRounded /></button>
            <button type="button" onClick={() => scrollRail(videosRailRef.current, "right")} aria-label="Ver próximos vídeos"><ChevronRightRounded /></button>
          </div>
        </div>

        <div className="portfolio-projects-rail-wrapper">
          <div ref={videosRailRef} className="portfolio-projects-rail videos-projects-rail" onScroll={(event) => updateRailFades("videos", event.currentTarget)} {...railInteractionProps}>
            {videoProjects.map((video) => (
              <button type="button" className="portfolio-video-card" key={video.id} onClick={() => handleCardClick(() => setSelectedVideo(video))}>
                <img src={video.cover} alt={`Capa de ${video.title}`} loading="lazy" draggable={false} />
                <span className="video-play-button"><PlayArrowRounded /></span>
                <span className="video-card-copy"><small>Vídeo vertical</small><strong>{video.title}</strong></span>
              </button>
            ))}
          </div>
          {renderFade("videos", "left")}
          {renderFade("videos", "right")}
        </div>
      </div>

      <div className="portfolio-projects-catalog">
        <div className="portfolio-projects-row-header">
          <div><small>Instagram</small><h3>Stories</h3></div>
          <div className="portfolio-projects-controls">
            <button type="button" onClick={() => scrollRail(storiesRailRef.current, "left")} aria-label="Ver stories anteriores"><ChevronLeftRounded /></button>
            <button type="button" onClick={() => scrollRail(storiesRailRef.current, "right")} aria-label="Ver próximos stories"><ChevronRightRounded /></button>
          </div>
        </div>

        <div className="portfolio-projects-rail-wrapper">
          <div ref={storiesRailRef} className="portfolio-projects-rail stories-projects-rail" onScroll={(event) => updateRailFades("stories", event.currentTarget)} {...railInteractionProps}>
            {storyProjects.map((story) => (
              <button
                type="button"
                className="portfolio-story-card"
                key={story.id}
                onClick={() => handleCardClick(() => {
                  setSelectedStory(story);
                  setSelectedStoryIndex(0);
                })}
              >
                <img src={story.images[0]} alt={story.title} loading="lazy" draggable={false} />
                {story.images.length > 1 && <span className="project-pages-badge"><CollectionsRounded />{story.images.length} páginas</span>}
                <span className="video-card-copy"><small>{story.images.length > 1 ? "Story carrossel" : "Story"}</small><strong>{story.title}</strong></span>
              </button>
            ))}
          </div>
          {renderFade("stories", "left")}
          {renderFade("stories", "right")}
        </div>
      </div>

      <div className="portfolio-projects-catalog">
        <div className="portfolio-projects-row-header">
          <div><small>Animação</small><h3>Motion Design</h3></div>
          <div className="portfolio-projects-controls">
            <button type="button" onClick={() => scrollRail(motionRailRef.current, "left")} aria-label="Ver motions anteriores"><ChevronLeftRounded /></button>
            <button type="button" onClick={() => scrollRail(motionRailRef.current, "right")} aria-label="Ver próximos motions"><ChevronRightRounded /></button>
          </div>
        </div>

        <div className="portfolio-projects-rail-wrapper">
          <div ref={motionRailRef} className="portfolio-projects-rail motion-projects-rail" onScroll={(event) => updateRailFades("motion", event.currentTarget)} {...railInteractionProps}>
            {motionProjects.map((video) => (
              <button
                type="button"
                className={`portfolio-motion-card motion-${video.format}`}
                key={video.id}
                onClick={() => handleCardClick(() => setSelectedVideo(video))}
              >
                <img src={video.cover} alt={`Capa de ${video.title}`} loading="lazy" draggable={false} />
                <span className="video-play-button"><PlayArrowRounded /></span>
                <span className="video-card-copy"><small>{video.format === "horizontal" ? "Motion horizontal" : video.format === "vertical" ? "Motion vertical" : "Motion 4:5"}</small><strong>{video.title}</strong></span>
              </button>
            ))}

            {motionCarouselProjects.map((project) => (
              <button
                type="button"
                className={`portfolio-motion-card motion-${project.format}`}
                key={project.id}
                onClick={() => handleCardClick(() => {
                  setSelectedMotionCarousel(project);
                  setSelectedMotionIndex(0);
                })}
              >
                <img src={project.videos[0].cover} alt={`Capa de ${project.title}`} loading="lazy" draggable={false} />
                <span className="project-pages-badge"><CollectionsRounded />{project.videos.length} vídeos</span>
                <span className="video-play-button"><PlayArrowRounded /></span>
                <span className="video-card-copy"><small>Motion • Carrossel</small><strong>{project.title}</strong></span>
              </button>
            ))}
          </div>
          {renderFade("motion", "left")}
          {renderFade("motion", "right")}
        </div>
      </div>

      {selectedPost && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-label={selectedPost.title} onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
          <div className="project-modal-content">
            <button type="button" className="project-modal-close" onClick={closeModal} aria-label="Fechar projeto"><CloseRounded /></button>
            <div className="project-modal-stage">
              <button type="button" className="project-modal-arrow project-modal-arrow-left" onClick={() => changePostImage("previous")} aria-label="Imagem anterior"><ChevronLeftRounded /></button>
              <img src={selectedPost.images[selectedPostIndex]} alt={`${selectedPost.title}, página ${selectedPostIndex + 1}`} />
              <button type="button" className="project-modal-arrow project-modal-arrow-right" onClick={() => changePostImage("next")} aria-label="Próxima imagem"><ChevronRightRounded /></button>
            </div>
            <div className="project-modal-footer">
              <div><small>Carrossel</small><strong>{selectedPost.title}</strong></div>
              <span className="project-modal-counter">{selectedPostIndex + 1} / {selectedPost.images.length}</span>
            </div>
            <div className="project-modal-dots">
              {selectedPost.images.map((_, index) => <button type="button" key={index} className={selectedPostIndex === index ? "active" : ""} onClick={() => setSelectedPostIndex(index)} aria-label={`Abrir página ${index + 1}`} />)}
            </div>
          </div>
        </div>
      )}

      {selectedVideo && (
        <div className="project-modal video-modal" role="dialog" aria-modal="true" aria-label={selectedVideo.title} onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
          <div className={`video-modal-content video-format-${selectedVideo.format}`}>
            <button type="button" className="project-modal-close" onClick={closeModal} aria-label="Fechar vídeo"><CloseRounded /></button>
            <video controls preload="metadata" poster={selectedVideo.cover}>
              <source src={selectedVideo.source} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
            <div className="project-modal-footer">
              <div><small>{selectedVideo.category}</small><strong>{selectedVideo.title}</strong></div>
            </div>
          </div>
        </div>
      )}

      {selectedMotionCarousel && (
        <div className="project-modal video-modal" role="dialog" aria-modal="true" aria-label={selectedMotionCarousel.title} onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
          <div className={`video-modal-content video-format-${selectedMotionCarousel.format}`}>
            <button type="button" className="project-modal-close" onClick={closeModal} aria-label="Fechar motion"><CloseRounded /></button>
            <div className="project-modal-stage motion-carousel-stage">
              <button type="button" className="project-modal-arrow project-modal-arrow-left" onClick={() => changeMotionVideo("previous")} aria-label="Motion anterior"><ChevronLeftRounded /></button>
              <video
                key={selectedMotionCarousel.videos[selectedMotionIndex].source}
                controls
                preload="metadata"
                poster={selectedMotionCarousel.videos[selectedMotionIndex].cover}
              >
                <source src={selectedMotionCarousel.videos[selectedMotionIndex].source} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <button type="button" className="project-modal-arrow project-modal-arrow-right" onClick={() => changeMotionVideo("next")} aria-label="Próximo motion"><ChevronRightRounded /></button>
            </div>
            <div className="project-modal-footer">
              <div><small>Motion Design • Carrossel</small><strong>{selectedMotionCarousel.title}</strong></div>
              <span className="project-modal-counter">{selectedMotionIndex + 1} / {selectedMotionCarousel.videos.length}</span>
            </div>
            <div className="project-modal-dots">
              {selectedMotionCarousel.videos.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={selectedMotionIndex === index ? "active" : ""}
                  onClick={() => setSelectedMotionIndex(index)}
                  aria-label={`Abrir motion ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedStory && (
        <div className="project-modal story-modal" role="dialog" aria-modal="true" aria-label={selectedStory.title} onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
          <div className="story-modal-content">
            <button type="button" className="project-modal-close" onClick={closeModal} aria-label="Fechar story"><CloseRounded /></button>
            <div className="story-modal-stage">
              {selectedStory.images.length > 1 && <button type="button" className="project-modal-arrow project-modal-arrow-left" onClick={() => changeStoryImage("previous")} aria-label="Story anterior"><ChevronLeftRounded /></button>}
              <img src={selectedStory.images[selectedStoryIndex]} alt={`${selectedStory.title}${selectedStory.images.length > 1 ? `, página ${selectedStoryIndex + 1}` : ""}`} />
              {selectedStory.images.length > 1 && <button type="button" className="project-modal-arrow project-modal-arrow-right" onClick={() => changeStoryImage("next")} aria-label="Próximo story"><ChevronRightRounded /></button>}
            </div>
            <div className="project-modal-footer">
              <div><small>{selectedStory.images.length > 1 ? "Instagram Story • Carrossel" : "Instagram Story"}</small><strong>{selectedStory.title}</strong></div>
              {selectedStory.images.length > 1 && <span className="project-modal-counter">{selectedStoryIndex + 1} / {selectedStory.images.length}</span>}
            </div>
            {selectedStory.images.length > 1 && (
              <div className="project-modal-dots">
                {selectedStory.images.map((_, index) => <button type="button" key={index} className={selectedStoryIndex === index ? "active" : ""} onClick={() => setSelectedStoryIndex(index)} aria-label={`Abrir story ${index + 1}`} />)}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
