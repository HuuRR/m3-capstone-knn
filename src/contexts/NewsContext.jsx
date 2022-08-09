import { useContext } from "react";
import { createContext, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export const NewsContext = createContext([]);

export const NewsProvider = ({ children }) => {
  const [allNews, setAllNews] = useState();
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();
  const [filter, setFilter] = useState();
  const [filteredNews, setFilteredNews] = useState();
  const [select, setSelect] = useState(false);
  const [aut, setAut] = useState(false);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  async function getAllNews() {
    try {
      const response = await api.get("/articles");

      setAllNews(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneNewsById(id) {
    try {
      const response = await api.get(`/articles/${id}`);

      setArticle(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getComments(id) {
    
    try {
      const response = await api.get(`/articles/${id}?_embed=comments`);

      setComments(response.data.comments);
    } catch (error) {
      console.log(error);
    }
  }

  async function createComment(body, userId, articleId) {
    const resp = {
      ownerId: userId,
      articleId: articleId,
      content: body,
      userImg:
        user.avatar ||
        "https://thumbs.dreamstime.com/z/imagem-nima-do-perfil-do-homem-34487140.jpg",
      username: user.name,
    };

    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      await api.post(`/comments`, resp, {
        headers: { Authorization: `Bearer ${token}` },
      });

      getComments(article?.id);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteComment(id, setSuccess) {
    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      await api.delete(`/comments/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSuccess(true);

      getComments(article?.id, setSuccess);
      
    } catch (error) {
      console.log(error);
    }
  }

  async function createArticle(formData, user, setSuccess) {
    const authorId = JSON.parse(localStorage.getItem("@KNN-ID"));

    const body = {
      ...formData,
      name: user.name,
      authorId: authorId,
      authorImg: user.avatar,
      likes: 0,
      reports: 0,
    };

    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      await api.post(`/articles`, body, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  async function editArticle(formData, id, setSuccess) {
    const authorId = JSON.parse(localStorage.getItem("@KNN-ID"));

    const body = {
      ...formData,
      authorId: authorId,
    };

    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));
      await api.patch(`/articles/${id}`, body, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteArticle(id, setSuccess) {
    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      await api.delete(`/articles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  async function voteArticle(articleId, articleLikes) {
    const likes = (articleLikes += 1);
    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      await api.patch(
        `/articles/${articleId}`,
        { likes: likes },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function reportArticle(articleId, articleReports) {
    const reports = (articleReports += 1);
    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      await api.patch(
        `/articles/${articleId}`,
        { reports: reports },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NewsContext.Provider
      value={{
        getAllNews,
        allNews,
        getOneNewsById,
        article,
        getComments,
        comments,
        createComment,
        createArticle,
        editArticle,
        voteArticle,
        reportArticle,
        deleteArticle,
        filter,
        setFilter,
        filteredNews,
        setFilteredNews,
        deleteComment,
        setSelect,
        setAut,
        aut,
        select
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
