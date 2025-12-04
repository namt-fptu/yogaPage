import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="animate-fade-in pb-20 pt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-primary mb-8 transition-colors">
          <ArrowLeft size={20} /> Quay lại danh sách bài viết
        </Link>

        <article className="bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-sm border border-stone-100 dark:border-stone-800">
          <div className="h-64 md:h-96 overflow-hidden relative">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="flex items-center gap-4 text-sm mb-3 opacity-90">
                  <span className="bg-primary px-3 py-1 rounded-full font-bold uppercase tracking-wide text-xs text-white">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} /> {post.date}
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div 
              className="prose prose-stone dark:prose-invert max-w-none text-lg leading-relaxed text-stone-600 dark:text-stone-300"
              dangerouslySetInnerHTML={{ __html: post.content?.join('') || '' }}
            />
            
            <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between">
               <div className="flex items-center gap-2 text-stone-500">
                  <Tag size={18} />
                  <span>Tags: {post.category}, Yoga, Sức khỏe</span>
               </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
