Rails.application.routes.draw do
  root 'welcome#resume'

  get 'resume' => 'welcome#resume'

  get 'contact' => 'welcome#contact'

  get 'pdf' => 'welcome#download_pdf'
end
