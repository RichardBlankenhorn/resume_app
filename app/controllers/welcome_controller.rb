class WelcomeController < ApplicationController
  def resume
  end

  def interest
  end

  def contact
  end

  def download_pdf
    send_file(
      "#{Rails.root}/public/RichardBlankenhornResume.pdf",
      filename: "Resume.pdf",
      type: "application/pdf"
    )
  end
end
