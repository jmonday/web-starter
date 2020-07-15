#!/bin/sh

composer global require hirak/prestissimo
composer install \
    --no-autoloader \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader
composer dump-autoload --optimize
rm -rf /root/.composer

rm -f public/storage && php artisan storage:link
php artisan horizon:install
php artisan nova:install
php artisan nova:publish
php artisan telescope:install
php artisan config:cache
# php artisan route:cache # Unable to prepare route [api/user] for serialization. Uses Closure.
php artisan view:cache

echo '* * * * * cd /backend && php artisan schedule:run >> /dev/null 2>&1' > /etc/crontabs/root
rc-update add crond && crond -b

supervisord -c /etc/supervisord.conf

php-fpm7 -F
