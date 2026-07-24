import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ChevronLeftRounded,
  ChevronRightRounded,
  CloseRounded,
  CollectionsRounded,
  PlayArrowRounded,
} from "@mui/icons-material";

/* CARROSSEL 1 */

import post1_1 from "../assets/projects/trabalhos/1 (1).jpg";
import post1_2 from "../assets/projects/trabalhos/1 (2).jpg";
import post1_3 from "../assets/projects/trabalhos/1 (3).jpg";
import post1_4 from "../assets/projects/trabalhos/1 (4).jpg";
import post1_5 from "../assets/projects/trabalhos/1 (5).jpg";
import post1_6 from "../assets/projects/trabalhos/1 (6).jpg";

/* CARROSSEL 2 */

import post2_1 from "../assets/projects/trabalhos/2 (1).jpg";
import post2_2 from "../assets/projects/trabalhos/2 (2).jpg";
import post2_3 from "../assets/projects/trabalhos/2 (3).jpg";
import post2_4 from "../assets/projects/trabalhos/2 (4).jpg";
import post2_5 from "../assets/projects/trabalhos/2 (5).jpg";
import post2_6 from "../assets/projects/trabalhos/2 (6).jpg";
import post2_7 from "../assets/projects/trabalhos/2 (7).jpg";
import post2_8 from "../assets/projects/trabalhos/2 (8).jpg";

/* CARROSSEL 3 */

import post3_1 from "../assets/projects/trabalhos/3 (1).jpg";
import post3_2 from "../assets/projects/trabalhos/3 (2).jpg";
import post3_3 from "../assets/projects/trabalhos/3 (3).jpg";
import post3_4 from "../assets/projects/trabalhos/3 (4).jpg";
import post3_5 from "../assets/projects/trabalhos/3 (5).jpg";
import post3_6 from "../assets/projects/trabalhos/3 (6).jpg";

/* CARROSSEL 4 */

import post4_1 from "../assets/projects/trabalhos/4 (1).jpg";
import post4_2 from "../assets/projects/trabalhos/4 (2).jpg";
import post4_3 from "../assets/projects/trabalhos/4 (3).jpg";
import post4_4 from "../assets/projects/trabalhos/4 (4).jpg";
import post4_5 from "../assets/projects/trabalhos/4 (5).jpg";
import post4_6 from "../assets/projects/trabalhos/4 (6).jpg";
import post4_7 from "../assets/projects/trabalhos/4 (7).jpg";
import post4_8 from "../assets/projects/trabalhos/4 (8).jpg";

/* CARROSSEL 5 */

import post5_1 from "../assets/projects/trabalhos/5 (1).jpg";
import post5_2 from "../assets/projects/trabalhos/5 (2).jpg";
import post5_3 from "../assets/projects/trabalhos/5 (3).jpg";
import post5_4 from "../assets/projects/trabalhos/5 (4).jpg";
import post5_5 from "../assets/projects/trabalhos/5 (5).jpg";
import post5_6 from "../assets/projects/trabalhos/5 (6).jpg";

/* CARROSSEL 6 */

import post6_1 from "../assets/projects/trabalhos/6 (1).jpg";
import post6_2 from "../assets/projects/trabalhos/6 (2).jpg";
import post6_3 from "../assets/projects/trabalhos/6 (3).jpg";
import post6_4 from "../assets/projects/trabalhos/6 (4).jpg";
import post6_5 from "../assets/projects/trabalhos/6 (5).jpg";

/* CARROSSEL 7 */

import post7_1 from "../assets/projects/trabalhos/7 (1).jpg";
import post7_2 from "../assets/projects/trabalhos/7 (2).jpg";
import post7_3 from "../assets/projects/trabalhos/7 (3).jpg";
import post7_4 from "../assets/projects/trabalhos/7 (4).jpg";
import post7_5 from "../assets/projects/trabalhos/7 (5).jpg";

/* CARROSSEL 8 */

import post8_1 from "../assets/projects/trabalhos/8 (1).jpg";
import post8_2 from "../assets/projects/trabalhos/8 (2).jpg";
import post8_3 from "../assets/projects/trabalhos/8 (3).jpg";
import post8_4 from "../assets/projects/trabalhos/8 (4).jpg";
import post8_5 from "../assets/projects/trabalhos/8 (5).jpg";
import post8_6 from "../assets/projects/trabalhos/8 (6).jpg";
import post8_7 from "../assets/projects/trabalhos/8 (7).jpg";
import post8_8 from "../assets/projects/trabalhos/8 (8).jpg";

/* VÍDEOS */

import video1Cover from "../assets/projects/videos/capa v1.jpg";
import video1 from "../assets/projects/videos/v1.mp4";
import video2 from "../assets/projects/videos/v2.mp4";
import video3 from "../assets/projects/videos/v3.mp4";

type ProjectTab = "posts" | "videos";

type PostProject = {
  id: number;
  title: string;
  images: string[];
};

type VideoProject = {
  id: number;
  title: string;
  source: string;
  cover?: string;
};

const postProjects: PostProject[] = [
  { id: 1, title: "Carrossel 01", images: [post1_1, post1_2, post1_3, post1_4, post1_5, post1_6] },
  { id: 2, title: "Carrossel 02", images: [post2_1, post2_2, post2_3, post2_4, post2_5, post2_6, post2_7, post2_8] },
  { id: 3, title: "Carrossel 03", images: [post3_1, post3_2, post3_3, post3_4, post3_5, post3_6] },
  { id: 4, title: "Carrossel 04", images: [post4_1, post4_2, post4_3, post4_4, post4_5, post4_6, post4_7, post4_8] },
  { id: 5, title: "Carrossel 05", images: [post5_1, post5_2, post5_3, post5_4, post5_5, post5_6] },
  { id: 6, title: "Carrossel 06", images: [post6_1, post6_2, post6_3, post6_4, post6_5] },
  { id: 7, title: "Carrossel 07", images: [post7_1, post7_2, post7_3, post7_4, post7_5] },
  { id: 8, title: "Carrossel 08", images: [post8_1, post8_2, post8_3, post8_4, post8_5, post8_6, post8_7, post8_8] },
];

const videoProjects: VideoProject[] = [
  {
    id: 1,
    title: "Reel / TikTok 01",
    source: video1,
    cover: video1Cover,
  },
  {
    id: 2,
    title: "Reel / TikTok 02",
    source: video2,
  },
  {
    id: 3,
    title: "Reel / TikTok 03",
    source: video3,
  },
];

const Projects: React.FC = () => {
  const postsRailRef = useRef<HTMLDivElement>(null);
  const videosRailRef = useRef<HTMLDivElement>(null);

  const dragStateRef = useRef<{
    isDragging: boolean;
    startX: number;
    scrollLeft: number;
    moved: boolean;
    pointerId: number | null;
    rail: HTMLDivElement | null;
  }>({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
    pointerId: null,
    rail: null,
  });

  const handleRailPointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const rail = event.currentTarget;

    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: rail.scrollLeft,
      moved: false,
      pointerId: event.pointerId,
      rail,
    };

    rail.setPointerCapture(event.pointerId);
    rail.classList.add("is-dragging");
  };

  const handleRailPointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const dragState = dragStateRef.current;

    if (!dragState.isDragging || dragState.rail !== event.currentTarget) {
      return;
    }

    const distance = event.clientX - dragState.startX;

    if (Math.abs(distance) > 5) {
      dragState.moved = true;
    }

    event.currentTarget.scrollLeft =
      dragState.scrollLeft - distance;
  };

  const finishRailDrag = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const dragState = dragStateRef.current;
    const rail = event.currentTarget;

    if (!dragState.isDragging || dragState.rail !== rail) {
      return;
    }

    dragState.isDragging = false;
    rail.classList.remove("is-dragging");

    if (rail.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }

    window.setTimeout(() => {
      dragStateRef.current.moved = false;
      dragStateRef.current.pointerId = null;
      dragStateRef.current.rail = null;
    }, 0);
  };

  const handleRailClickCapture = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!dragStateRef.current.moved) return;

    event.preventDefault();
    event.stopPropagation();
  };

  const [activeTab, setActiveTab] =
    useState<ProjectTab>("posts");

  const [selectedPost, setSelectedPost] =
    useState<PostProject | null>(null);

  const [selectedImageIndex, setSelectedImageIndex] =
    useState(0);

  const [selectedVideo, setSelectedVideo] =
    useState<VideoProject | null>(null);

  const scrollRail = (
    rail: HTMLDivElement | null,
    direction: "left" | "right"
  ) => {
    if (!rail) return;

    const distance = rail.clientWidth * 0.78;

    rail.scrollBy({
      left:
        direction === "left"
          ? -distance
          : distance,
      behavior: "smooth",
    });
  };

  const openPost = (project: PostProject) => {
    setSelectedPost(project);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setSelectedVideo(null);
    setSelectedImageIndex(0);
  };

  const changeImage = useCallback(
  (direction: "previous" | "next") => {
    if (!selectedPost) return;

    const total = selectedPost.images.length;

    setSelectedImageIndex((current) => {
      if (direction === "next") {
        return (current + 1) % total;
      }

      return (current - 1 + total) % total;
    });
  },
  [selectedPost]
);

  useEffect(() => {
    const modalOpen =
      selectedPost !== null ||
      selectedVideo !== null;

    document.body.style.overflow = modalOpen
      ? "hidden"
      : "";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (!modalOpen) return;

      if (event.key === "Escape") {
        closeModal();
      }

      if (selectedPost) {
        if (event.key === "ArrowRight") {
          changeImage("next");
        }

        if (event.key === "ArrowLeft") {
          changeImage("previous");
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedPost, selectedVideo, changeImage]);

  return (
    <section
      id="projetos"
      className="portfolio-projects-section"
    >
      <div className="portfolio-projects-heading">
        <span className="section-pill reveal">
          Projetos
        </span>

        <h2 className="reveal">
          Trabalhos que transformam ideias em
          <span className="gradient-text">
            {" "}
            comunicação visual.
          </span>
        </h2>

        <div
          className="projects-tabs reveal"
          role="tablist"
          aria-label="Categorias de projetos"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "posts"}
            className={
              activeTab === "posts"
                ? "active"
                : ""
            }
            onClick={() => setActiveTab("posts")}
          >
            Posts para redes sociais
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "videos"}
            className={
              activeTab === "videos"
                ? "active"
                : ""
            }
            onClick={() => setActiveTab("videos")}
          >
            Reels / TikTok
          </button>
        </div>
      </div>

      {activeTab === "posts" && (
        <div className="portfolio-projects-catalog">
          <div className="portfolio-projects-row-header">
            <div>
              <small>Social media</small>
              <h3>Posts e carrosséis</h3>
            </div>

            <div className="portfolio-projects-controls">
              <button
                type="button"
                onClick={() =>
                  scrollRail(
                    postsRailRef.current,
                    "left"
                  )
                }
                aria-label="Ver trabalhos anteriores"
              >
                <ChevronLeftRounded />
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollRail(
                    postsRailRef.current,
                    "right"
                  )
                }
                aria-label="Ver próximos trabalhos"
              >
                <ChevronRightRounded />
              </button>
            </div>
          </div>

          <div className="portfolio-projects-rail-wrapper">
            <div
              ref={postsRailRef}
              className="portfolio-projects-rail"
              onPointerDown={handleRailPointerDown}
              onPointerMove={handleRailPointerMove}
              onPointerUp={finishRailDrag}
              onPointerCancel={finishRailDrag}
              onClickCapture={handleRailClickCapture}
              style={{
                touchAction: "pan-y",
                cursor: "grab",
                userSelect: "none",
              }}
            >
              {postProjects.map((project) => (
                <button
                  type="button"
                  className="portfolio-project-card project-carousel-card"
                  key={project.id}
                  onClick={() => openPost(project)}
                >
                  <img
                    src={project.images[0]}
                    alt={`Capa de ${project.title}`}
                    loading="lazy"
                    draggable={false}
                  />

                  <span className="project-pages-badge">
                    <CollectionsRounded />
                    {project.images.length} páginas
                  </span>

                  <span className="portfolio-project-overlay">
                    <span>
                      <small>Carrossel</small>
                      <strong>
                        {project.title}
                      </strong>
                    </span>

                    <span className="portfolio-project-expand">
                      <CollectionsRounded />
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <span
              className="portfolio-projects-fade portfolio-projects-fade-left"
              aria-hidden="true"
            />

            <span
              className="portfolio-projects-fade portfolio-projects-fade-right"
              aria-hidden="true"
            />
          </div>
        </div>
      )}

      {activeTab === "videos" && (
        <div className="portfolio-projects-catalog">
          <div className="portfolio-projects-row-header">
            <div>
              <small>Conteúdo vertical</small>
              <h3>Reels e TikTok</h3>
            </div>

            <div className="portfolio-projects-controls">
              <button
                type="button"
                onClick={() =>
                  scrollRail(
                    videosRailRef.current,
                    "left"
                  )
                }
                aria-label="Ver vídeos anteriores"
              >
                <ChevronLeftRounded />
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollRail(
                    videosRailRef.current,
                    "right"
                  )
                }
                aria-label="Ver próximos vídeos"
              >
                <ChevronRightRounded />
              </button>
            </div>
          </div>

          <div className="portfolio-projects-rail-wrapper">
            <div
              ref={videosRailRef}
              className="portfolio-projects-rail videos-projects-rail"
              onPointerDown={handleRailPointerDown}
              onPointerMove={handleRailPointerMove}
              onPointerUp={finishRailDrag}
              onPointerCancel={finishRailDrag}
              onClickCapture={handleRailClickCapture}
              style={{
                touchAction: "pan-y",
                cursor: "grab",
                userSelect: "none",
              }}
            >
              {videoProjects.map((video) => (
                <button
                  type="button"
                  className="portfolio-video-card"
                  key={video.id}
                  onClick={() =>
                    setSelectedVideo(video)
                  }
                >
                  {video.cover ? (
                    <img
                      src={video.cover}
                      alt={`Capa de ${video.title}`}
                      loading="lazy"
                      draggable={false}
                    />
                  ) : (
                    <span className="video-placeholder">
                      <span>V{video.id}</span>
                    </span>
                  )}

                  <span className="video-play-button">
                    <PlayArrowRounded />
                  </span>

                  <span className="video-card-copy">
                    <small>Vídeo vertical</small>
                    <strong>{video.title}</strong>
                  </span>
                </button>
              ))}
            </div>

            <span
              className="portfolio-projects-fade portfolio-projects-fade-left"
              aria-hidden="true"
            />

            <span
              className="portfolio-projects-fade portfolio-projects-fade-right"
              aria-hidden="true"
            />
          </div>
        </div>
      )}

      {selectedPost && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPost.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="project-modal-content">
            <button
              type="button"
              className="project-modal-close"
              onClick={closeModal}
              aria-label="Fechar projeto"
            >
              <CloseRounded />
            </button>

            <div className="project-modal-stage">
              <button
                type="button"
                className="project-modal-arrow project-modal-arrow-left"
                onClick={() =>
                  changeImage("previous")
                }
                aria-label="Imagem anterior"
              >
                <ChevronLeftRounded />
              </button>

              <img
                src={
                  selectedPost.images[
                    selectedImageIndex
                  ]
                }
                alt={`${selectedPost.title}, página ${
                  selectedImageIndex + 1
                }`}
              />

              <button
                type="button"
                className="project-modal-arrow project-modal-arrow-right"
                onClick={() =>
                  changeImage("next")
                }
                aria-label="Próxima imagem"
              >
                <ChevronRightRounded />
              </button>
            </div>

            <div className="project-modal-footer">
              <div>
                <small>Carrossel</small>
                <strong>
                  {selectedPost.title}
                </strong>
              </div>

              <span className="project-modal-counter">
                {selectedImageIndex + 1} /{" "}
                {selectedPost.images.length}
              </span>
            </div>

            <div className="project-modal-dots">
              {selectedPost.images.map(
                (_, index) => (
                  <button
                    type="button"
                    key={index}
                    className={
                      selectedImageIndex === index
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setSelectedImageIndex(index)
                    }
                    aria-label={`Abrir página ${
                      index + 1
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}

      {selectedVideo && (
        <div
          className="project-modal video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="video-modal-content">
            <button
              type="button"
              className="project-modal-close"
              onClick={closeModal}
              aria-label="Fechar vídeo"
            >
              <CloseRounded />
            </button>

            <video
              controls
              preload="metadata"
              poster={selectedVideo.cover}
            >
              <source
                src={selectedVideo.source}
                type="video/mp4"
              />

              Seu navegador não suporta vídeos.
            </video>

            <div className="project-modal-footer">
              <div>
                <small>Reels / TikTok</small>
                <strong>
                  {selectedVideo.title}
                </strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;