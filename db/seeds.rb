%w( breakfast lunch dinner brunch brinner ).each do |meal|
  Menu.create(name: meal)
end
