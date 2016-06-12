Rails.application.routes.draw do
  root 'welcome#home'

  get 'resume' => 'welcome#resume'

  get 'contact' => 'welcome#contact'

  get 'pdf' => 'welcome#download_pdf'
end
