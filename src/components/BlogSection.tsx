import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";

const posts = [
  {
    date: "Jan 15, 2026",
    title: "The Importance of Regular Dental Check-ups for Your Family",
    img: blog1,
  },
  {
    date: "Jan 10, 2026",
    title: "Latest Advances in Dental Technology You Should Know",
    img: blog2,
  },
  {
    date: "Jan 5, 2026",
    title: "5 Daily Habits for Maintaining a Healthy Smile",
    img: blog1,
  },
];

const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="blog" className="py-20 bg-background">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="flex items-center justify-between mb-14">
          <div>
            <span className="inline-block bg-primary/15 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Blog
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-[Sora] text-foreground">Our Blog</h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-foreground font-medium group">
            Read All Articles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-card rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden h-48">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <p className="text-primary text-sm font-medium mb-2">{post.date}</p>
                <h3 className="font-bold text-lg font-[Sora] text-foreground mb-4 leading-snug">{post.title}</h3>
                <button className="inline-flex items-center gap-2 text-foreground font-medium text-sm group/link">
                  Read More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
