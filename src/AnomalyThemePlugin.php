<?php namespace Anomaly\AnomalyTheme;

use Anomaly\Streams\Platform\Addon\Plugin\Plugin;

/**
 * Class AnomalyThemePlugin
 *
 * @link          http://anomaly.is/streams-platform
 * @author        AnomalyLabs, Inc. <hello@anomaly.is>
 * @author        Ryan Thompson <ryan@anomaly.is>
 * @package       Anomaly\AnomalyTheme
 */
class AnomalyThemePlugin extends Plugin
{

    /**
     * The plugin functions handler.
     *
     * @var AnomalyThemePluginFunctions
     */
    protected $functions;

    /**
     * Create a new AnomalyThemePlugin instance.
     *
     * @param AnomalyThemePluginFunctions $functions
     */
    public function __construct(AnomalyThemePluginFunctions $functions)
    {
        $this->functions = $functions;
    }

    /**
     * Return functions to allow interaction
     * with the theme and it's features.
     *
     * @return array
     */
    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('theme_nav', [$this->functions, 'nav']),
            new \Twig_SimpleFunction('theme_footprint', [$this->functions, 'footprint']),
            new \Twig_SimpleFunction('theme_pagination', [$this->functions, 'pagination']),
        ];
    }
}
