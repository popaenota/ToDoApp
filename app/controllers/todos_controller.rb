class TodosController < ApplicationController
  def index
  	@projects = Project.all.includes(:todos).order('todos.created_at,todos.text')
  end

  def update
   # render text: params.inspect
  @todo=Todo.find (params[:todo][:id])
   @todo.update_attributes(isCompleted: params[:todo][:isCompleted])
   redirect_to '/'
     end

  def create
  	 #render text: params.inspect
  	Todo.create(text: params[:todo][:text], isCompleted: params[:todo][:isCompleted] , project_id: params[:todo][:project_id])
  	redirect_to '/'
  end
end
