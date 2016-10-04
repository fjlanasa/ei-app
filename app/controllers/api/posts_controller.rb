class Api::PostsController < ApiController
  def index
    posts = Post.all
    render json: { posts: posts }, status: :ok
  end

  def create
    binding.pry
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
