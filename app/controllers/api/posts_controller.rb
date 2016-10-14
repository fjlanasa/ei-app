class Api::PostsController < ApiController
  def index
    posts = Post.all
    user = current_user
    if !user.nil?
      user = current_user
      all_posts_sql = "select level_two_words.name, posts.text, posts.created_at from " \
      "posts join level_two_words on posts.level_two_word_id = level_two_words.id order by posts.created_at desc;"
      posts = ActiveRecord::Base.connection.execute(all_posts_sql)

      user_posts_sql = "select level_two_words.name, posts.text, posts.created_at from " \
      "posts join level_two_words on posts.level_two_word_id = level_two_words.id "\
      "where posts.user_id = #{user.id} order by posts.created_at desc;"
      user_posts = ActiveRecord::Base.connection.execute(user_posts_sql)

      render json: { posts: posts, current_user_posts: user_posts}, status: :ok
    else
      all_posts_sql = "select level_two_words.name, posts.text, posts.created_at from " \
      "posts join level_two_words on posts.level_two_word_id = level_two_words.id order by posts.created_at desc;"
      posts = ActiveRecord::Base.connection.execute(all_posts_sql)
      render json: {posts: posts}
    end
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: { post: post }, status: :created
    else
      render json: { errors: post.errors }, status: :unprocessable_entity
    end
  end

  private
  def post_params
    params.require(:post).permit(:text, :level_two_word_id, :user_id)
  end

end
