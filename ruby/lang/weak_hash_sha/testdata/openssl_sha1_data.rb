OpenSSL::Digest.digest("sha1", user.first_name)

y = OpenSSL::Digest::SHA.new
y.digest(user.first_name)